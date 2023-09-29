function symbolGenerator(sidc, options, ms) {
    let symbol = new ms.Symbol(sidc, options);
    return symbol.asSVG()
}

module.exports = symbolGenerator