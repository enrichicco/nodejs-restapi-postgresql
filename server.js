/*

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const taskController = require('./controller/task.controller')



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    console.log(req.body);
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.updateTask(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})


*/

const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()


console.log("config loaded");

const app = express();
const port = process.env.EXPRESS_API_PORT || 3000;

app.use(bodyParser.json());


// load and activate www endpoints for tasks test/demo
const tasksWwwEndpoints = require('./wwwendpoints/tasks');
tasksWwwEndpoints.tasksWwwEndpoints(app);

// load and activate www endpoints for viot emulator
const viotsWwwEndpoints = require('./wwwendpoints/viotemulator');
viotsWwwEndpoints.viotEmuleWwwEndpoints(app);



/*

const taskController = require('./controller/task.controller')


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

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

*/

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})

