const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');


module.exports = () => {
    console.log('Criando app express.');
    const app = express();

    // APPLICATION VARIABLES
    app.set('port', process.env.PORT || config.get('server.port'));
    app.set('useMD33', process.env.USE_MD33 || config.get('ms.useMD33'))
    app.set('drawOctagon', process.env.DRAW_OCTAGON || config.get('ms.drawOctagon'))

    console.log(`Symbol generator UP with:\nuseMD33:${app.get('useMD33')}\nDrawOctagon:${app.get('drawOctagon')}\n`);

    // MIDDLEWARES
    app.use(bodyParser.json());

    //ENDPOINTS
    consign({ cwd: 'api' })
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};