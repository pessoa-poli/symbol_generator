/**
 * Patch for removing milsymbol extensions on the fly
 */

function _removeFunction(functionContainer, theFunction) {
    let index = functionContainer.indexOf(theFunction)
    if (index != -1) {
        functionContainer.splice(index, 1)
    }
}

export function patchIconCache(ms) {
    /**
     * Retorna o cache de iconParts que a milsymbol está utilizando.
     */
    ms.getIconParts = function _getIconParts(symbol) {
        let icnet = _makeIconPartsCacheKey(symbol.metadata,
                                           symbol.colors,
                                           symbol.style);
        return ms._iconCache[icnet].iconParts;
    }
}

function _makeIconPartsCacheKey(metadata: any,
                                colors: any,
                                style: any,) {
    let affiliation = metadata.affiliation;
    let fillColor = colors.fillColor[affiliation];
    let neutralColor = colors.fillColor.Neutral;
    let iconColor = colors.iconColor[affiliation];
    let iconFillColor = colors.iconFillColor[affiliation];
    let none = colors.none[affiliation];
    let black = colors.black[affiliation];
    let white = colors.white[affiliation];
    return (metadata.STD2525 ? "2525" : "APP6") +
        "," +
        metadata.dimension +
        affiliation +
        metadata.notpresent +
        metadata.numberSIDC +
        ",frame:" +
        style.frame +
        ",alternateMedal:" +
        style.alternateMedal +
        ",colors:{fillcolor:" +
        fillColor +
        ",neutralColor" +
        neutralColor +
        ",iconColor:" +
        iconColor +
        ",iconFillColor:" +
        iconFillColor +
        ",none:" +
        none +
        ",black:" +
        black +
        ",white:" +
        white +
        "}";
}

export function patchExtensionRemovers(ms) {
    ms.removeIconParts = function _removeIconParts(parts) {
        if (!Array.isArray(parts)) parts = [parts];
        for (var i = 0; i < parts.length; i++) {
            _removeFunction(this._iconParts, parts[i])
        }
    }
    ms.removeSIDCicons = function _removeSIDCicons(parts, type) {
        if (!Array.isArray(parts)) parts = [parts];
        for (var i = 0; i < parts.length; i++) {
            _removeFunction(this._iconSIDC[type], parts[i])
        }
    }
    ms.removeSymbolPart = function _removeSymbolPart(parts) {
        if (!Array.isArray(parts)) parts = [parts];
        for (var i = 0; i < parts.length; i++) {
            _removeFunction(this._symbolParts, parts[i])
        }
    }
}

/**
 * Precisamos fazer escalões "grandes" (5 ou 6 "X") caberem nos limites da
 * moldura.
 */
export function patchEchelonRendering(ms) {
    let symbolPartFunctions = ms.getSymbolParts();
    let graphicAmplifiersFunction = symbolPartFunctions[2];
    let newEchelonFunction = _makeSymbolPartFunction_ScaleEchelonToFit(graphicAmplifiersFunction);
    symbolPartFunctions[2] = newEchelonFunction;
    ms.setSymbolParts(symbolPartFunctions);
}

import {Scale, Translate} from './milsymbol-types'
/**
 * Substituta da symbol function que renderiza amplificadores gráficos
 * (milsymbol/src/symbolfunctions/modifier.js).
 * Aqui, a preocupação é não mexer na original, exceto nos casos em que
 * quisermos adaptar.
 */
function _makeSymbolPartFunction_ScaleEchelonToFit(regularAmplifierFunction) {
    return function scaleEchelonToFit(ms) {
        let regularAmplifier = regularAmplifierFunction.call(this, ms)
        if (this.metadata.echelon == "Army Group/front") {  // Escalão "XXXXX"
            regularAmplifier.post = [
                new Translate(10, 5, [
                    new Scale(0.9, regularAmplifier.post)
                ])
            ]
        } else if (this.metadata.echelon == "Region/Theater") { // Escalão "XXXXXX"
            regularAmplifier.post = [
                new Translate(25, 10, [
                    new Scale(0.75, regularAmplifier.post)
                ])
            ]
        }
        return regularAmplifier
    }
}
