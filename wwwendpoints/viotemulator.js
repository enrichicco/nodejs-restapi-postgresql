
//
// tasks test www endpoints
//

const viotController = require('../controller/visioniot.controller')

const viotEmuleWwwEndpoints = (app) => {

    app.get('/viot/devices', (req, res) => {
        viotController.getDevices().then(data => res.json(data));
    });
    app.get('/viot/telemetries', (req, res) => {
        viotController.getTelemetries().then(data => res.json(data));
    });
    
    app.post('/viot/device', (req, res) => {
        console.log("create task ... task follows", req.body, "end of posted task");
        viotController.createDevice(req.body.device).then(data => res.json(data));
    });

    app.post('/viot/telemetry', (req, res) => {
        console.log("create task ... task follows", req.body, "end of posted task");
        viotController.createTelemetry(req.body.telemetry).then(data => res.json(data));
    });
    
    app.get('/viot', (req, res) => {
        res.send(`<h1>Vision IOT emulator Works !!!</h1>`)
    });
    
    return app;    
}

function contentTransformer(req, beanName){
    const bodytype = req.headers["content-type"]
    switch(bodytype){
        case 'application/json':
            return req.body[beanName];
            break;
        case 'application/json':
            return req.body[beanName];
            break;
        }

}

module.exports = {
    viotEmuleWwwEndpoints
}
