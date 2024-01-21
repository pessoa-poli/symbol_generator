module.exports = (app) => {
    const controller = {};
    let sg = require("../../assets/symbolGenerator")
    let ms = require("../../assets/md-simbologia")
    ms.useMD33(app.get('useMD33').toString().toLowerCase() == "true")
    ms.drawOctagon(app.get('drawOctagon').toString().toLowerCase() == "true")
    console.log('Showing configs inside app');
    console.log('drawOctagon: ' + app.get("drawOctagon"));
    console.log('fin');
    controller.symbolGenerator = (req, res) => {
        console.log('Mostrando something: ' + req.query.something);
        sidc = req.body.sidc
        options = req.body.options
        console.log(`SIDC:${sidc}\nOptions:${JSON.stringify(options)}`);
        res.status(200).json(sg(sidc, options, ms));
    };

    controller.symbolGeneratorGET = (req, res) => {
        // console.log('Mostrando something: ' + req.query.something);
        let payload = JSON.parse(req.query.payload)
        sidc = payload.sidc
        options = payload.options
        console.log(`SIDC:${sidc}\nOptions:${JSON.stringify(options)}`);
        res.status(200).json(sg(sidc, options, ms));
    };

    return controller;
}