const express = require('express');
const router = express.Router();
const TaskController = require('../Controller/TaskController');
const authorizeRoles = require('../Middlewares/Authorization');
router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTaskById);
router.post('/', TaskController.createTask);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);
router.get('/summarize/:id', authorizeRoles('admin','user'), TaskController.summarizeTask)

module.exports = router;