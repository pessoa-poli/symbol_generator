// @ts-ignore
import ms from 'milsymbol'


import {
    patchExtensionRemovers,
    patchIconCache,
    patchEchelonRendering
 } from './ms-extension-helpers'
patchExtensionRemovers(ms)
patchIconCache(ms)
patchEchelonRendering(ms)

import mdIconParts from './iconparts'
import overrideSIDC from './sidcmapping'
import renderNationalExtension from './symbolextensions'

var _usingMD33 = false
/**
 * Ativa ou desativa as extensões e alterações de simbologia que o
 * padrão MD33-M-02 impõe ao APP-6D.
 * 
 * @param {Boolean} shouldUse Estamos usando MD33-M-02 ou não?
 */
ms.useMD33 = function _useMD33(shouldUse) {
    if (shouldUse) {
        if (!_usingMD33) {
            this._iconCache = {}
        }
        ms.setStandard("APP6")
        ms.addIconParts(mdIconParts)
        ms.addSIDCicons(overrideSIDC, "number")
        ms.addSymbolPart(renderNationalExtension)
    } else {
        if (_usingMD33) {
            this._iconCache = {}
        }
        ms.removeIconParts(mdIconParts)
        ms.removeSIDCicons(overrideSIDC, "number")
        ms.removeSymbolPart(renderNationalExtension)
    }
    _usingMD33 = shouldUse
}
ms.useMD33(true)

import {
    toggleDebugOctagon,
    makeReferenceSymbol
} from './debug'
// TODO: estender o tipo ms para ter essas funções.
ms.drawOctagon = (shouldDraw: boolean) => toggleDebugOctagon(ms, shouldDraw);
ms.makeReferenceSymbol = (sidc: string, size: number) => makeReferenceSymbol(ms, sidc, size);
export default ms;

import {echelonMobilityCodes} from "./symbolextensions/echelonmobility";
import {LandUnitExtensions} from "./symbolextensions/landunits";
import {LandInstallationExtensions} from "./symbolextensions/landinstallations";
import {COUNTRY_CODES, SYMBOL_SET_CODES} from "./symbolextensions/constants";
import {LandEquipmentExtensions} from "./symbolextensions/landequipment";
import {ActivitiesExtensions} from "./symbolextensions/activities";
import {LandCivilianExtensions} from "./symbolextensions/landcivilian";
import {SeaSurfaceExtensions} from './symbolextensions/seasurface'

export const extensionCodes = {
    ...echelonMobilityCodes,
    [SYMBOL_SET_CODES.LAND_UNIT]: LandUnitExtensions,
    [SYMBOL_SET_CODES.LAND_INSTALLATION]: LandInstallationExtensions,
    [SYMBOL_SET_CODES.LAND_EQUIPMENT]: LandEquipmentExtensions,
    [SYMBOL_SET_CODES.ACTIVITIES]: ActivitiesExtensions,
    [SYMBOL_SET_CODES.LAND_CIVILIAN]: LandCivilianExtensions,
    [SYMBOL_SET_CODES.SEA_SURFACE]: SeaSurfaceExtensions,
}

export const md33MilsymbolConstants = {
    COUNTRY_CODES,
    SYMBOL_SET_CODES,
}
