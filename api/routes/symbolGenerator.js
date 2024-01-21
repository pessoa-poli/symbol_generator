module.exports = app => {
    const controller = app.controllers.symbolGenerator;
    app.route('/api/v1/gen')
        .post(controller.symbolGenerator);
    app.route('/api/v1/gen')
        .get(controller.symbolGenerator);
}