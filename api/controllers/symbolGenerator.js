module.exports = (app) => {
    const controller = {};
    let sg = require("../../assets/symbolGenerator")
    let ms = require("../../assets/md-simbologia")
    ms.useMD33(app.get('useMD33'))
    ms.drawOctagon(app.get('drawOctagon'))
    controller.symbolGenerator = (req, res) => {
        sidc = req.body.sidc
        options = req.body.options
        console.log(`SIDC:${sidc}\nOptions:${JSON.stringify(options)}`);
        res.status(200).json(sg(sidc, options, ms));
    };

    return controller;
}