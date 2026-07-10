const express = require('express');
const app = express();
app.use(express.json());

let Tasks = [
    {id:1, name: "Instal Node js", priority:"high", completed:false},
    {id:2, name: "Instal React", priority:"high", completed:false},
    {id:3, name: "Instal Mongo", priority:"high", completed:false}
]
nextId = 4;

let Users = [
    {id:1, firstname:"sushil", lastname:"Timilsina", email:"timilsina@example.com", password:"123456"},
]


netUserId = 2;



app.get('/', (req,res) => { 
    res.send('Express server is running....')
 })

 app.get('/task', (req,res) => {
    res.status(200).json(Tasks);
 })

 app.get('/task/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const task = Tasks.find(t => t.id === id);
    
    if(!task){
        res.status(404).json({message: "Task not found"});
    } else {
        res.status(200).json(task);
    }

 })

 app.post('/task', (req,res) => {

    const newTask = req.body;

    newTask.id = nextId++;

    Tasks.push(newTask);

    res.status(201).json(newTask);

 })


 app.put('/task/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const taskIndex = Tasks.findIndex(t => t.id === id);

    if(taskIndex === -1){
        res.status(404).json({message: "Task not found"});
    } else {
        const updatedTask = req.body;
        updatedTask.id = id;
        Tasks[taskIndex] = updatedTask;
        res.status(201).json(updatedTask);
    }

 })


 app.delete('/task/:id', (req,res) => {
     const id = parseInt(req.params.id);
     const taskIndex = Tasks.findIndex(t => t.id === id);

        if(taskIndex === -1){ 
            res.status(401).json({message:"Task not found"})
        } else {
            const deletedTask = Tasks.splice(taskIndex, 1);
            res.status(200).json(deletedTask[0]);
        }



 })


 




app.listen(5000, ()=>{
    console.log('Express Server is running on port 5000');
})