
//
// tasks test www endpoints
//

const taskController = require('../controller/task.controller')

const tasksWwwEndpoints = (app) => {

    app.get('/api/tasks', (req, res) => {
        taskController.getTasks().then(data => res.json(data));
    });
    
    app.post('/api/task', (req, res) => {
        console.log("create task ... task follows", req.body, "end of posted task");
        taskController.createTask(req.body.task).then(data => res.json(data));
    });
    
    app.put('/api/task', (req, res) => {
        taskController.updateTask(req.body.task).then(data => res.json(data));
    });
    
    app.delete('/api/task/:id', (req, res) => {
        taskController.deleteTask(req.params.id).then(data => res.json(data));
    });
    
    app.get('/api', (req, res) => {
        res.send(`<h1>API Works !!!</h1>`)
    });
    
    return app;
    
}

module.exports = {
    tasksWwwEndpoints
}
