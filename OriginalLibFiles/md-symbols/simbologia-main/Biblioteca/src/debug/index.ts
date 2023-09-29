import { Path } from "../milsymbol-types";

const horizontalOctagonPath = "M 60 120 L 140 120 M 140 80 L 60 80 M 100 50 L 135.355 64.645 L 150 100 L 135.355 135.355 L 100 150 L 64.645 135.355 L 50 100 L 64.645 64.645 L 100 50 Z"
const verticalOctagonPath = "M 120 60 L 120 140 M 80 60 L 80 140 M 100 50 L 135.355 64.645 L 150 100 L 135.355 135.355 L 100 150 L 64.645 135.355 L 50 100 L 64.645 64.645 L 100 50 Z"

/**
 * Ativa/desativa um octógono **sobre** o símbolo, para debug.
 */
export function toggleDebugOctagon(ms, shouldDraw: boolean) {
  function debugOctagon(ms) {
    return _drawOctagon.call(this, ms, "blue")
  }
  if (shouldDraw) {
      ms.addSymbolPart(debugOctagon)
  } else {
      let symbolParts = ms.getSymbolParts()
      let index = symbolParts.findIndex((f: Function) => f.name == "debugOctagon")
      if (index != -1) {
          symbolParts.splice(index, 1)
          ms.setSymbolParts(symbolParts)
      }
  }
}

/**
 * Constrói um ms.Symbol com a moldura e um octógono de referência esmaecidos e os ícones destacados.
 * É útil para construir catálogos de partes de símbolos.
 *
 * @size é o tamanho do valor de referência "L" do octógono (base
 * do tamanho de todos os símbolos).
 */
export function makeReferenceSymbol(ms, sidc: string, size: number) {
    let referenceColor = "#dee2e6"
    let referenceSIDC = _makeReferenceSIDC(sidc)
    let backgroundOctagonFunction = function (ms) {
        let referenceColor = "#dee2e6"
        return _drawOctagon.call(this, ms, referenceColor)
    }

    _toggleBackgroundOctagon(ms, backgroundOctagonFunction, true)
    let referenceSymbol = new ms.Symbol(referenceSIDC)
    let frameColor = referenceSymbol.colors.frameColor
    frameColor.Friend = referenceColor
    referenceSymbol = new ms.Symbol(referenceSIDC, {
        size: size,
        frame: true,
        fillOpacity: 0,
        frameColor: frameColor,
    })
    _toggleBackgroundOctagon(ms, backgroundOctagonFunction, false)
    return referenceSymbol
}

// Remove amplificadores gráficos do SIDC
function _makeReferenceSIDC(sidc: string) {
    let referenceSIDC = sidc.substr(0, 2)
                        + "03" //ololooo aiooo
                        + sidc.substr(4, 2) + "0000" + sidc.substr(10)
  return referenceSIDC
}

function _toggleBackgroundOctagon(ms, octagonFunction: Function, shouldDraw: boolean) {
  if (shouldDraw) {
      let symbolParts = ms.getSymbolParts()
      ms.setSymbolParts([octagonFunction].concat(symbolParts))
  } else {
      let symbolParts = ms.getSymbolParts()
      let index = symbolParts.indexOf(octagonFunction)
      if (index != -1) {
          symbolParts.splice(index, 1)
          ms.setSymbolParts(symbolParts)
      }
  }
}

function _drawOctagon(ms, color: string) {
  let symbolSet = this.options.sidc.substr(4, 2)
  let octagonPath = (symbolSet == "02") ? verticalOctagonPath : horizontalOctagonPath
  let octagonInstruction = new Path({
    fill: false,
    stroke: color,
    d: octagonPath
  });
  octagonInstruction.strokewidth = 2
  return { pre: [],
           post: [octagonInstruction],
           bbox: new ms.BBox };
}
