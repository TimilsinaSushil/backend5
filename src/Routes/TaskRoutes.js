const express = require('express');
const router = express.Router();
const TaskController = require('../Controller/TaskController');
router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTaskById);
router.post('/', TaskController.createTask);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);
router.get('/user/:user_id', TaskController.getTasksByUserId);

module.exports = router;