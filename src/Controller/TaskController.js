const TaskModel = require('../Models/TaskModel');
const { generateContent } = require('../Services/GeminiService');

const getAllTasks = async (req, res) => {
    try {
        const id = req.user.id;
        const tasks = await TaskModel.find({ user_id: id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error: error.message });
    }
};

const getTasksByUserId = async (req, res) => {
    try {
        const tasks = await TaskModel.find({ user_id: req.params.user_id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving task', error });
    }
};

const createTask = async (req, res) => {
    try {
        req.body.user_id = req.user.id;
        const newTask = await TaskModel.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

const updateTask = async (req, res) => {
    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

const deleteTask = async (req, res) => {
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
        if (deletedTask) {
            res.status(200).json(deletedTask);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};

const summarizeTask = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await TaskModel.findById(id);
        //setting prompt template
        const prompt = `Summarize the following task for a project report:
    - Title: ${task.title}
    - Description: ${task.description}
    - Status: ${task.completed ? 'Completed' : 'Pending'}
    Please provide a professional 1-sentence summary of this task.
`
        const response = await generateContent(prompt);
        res.json({ summary: response });
    } catch (error) {
        console.log({ error: error.message })
        res.status(500).json({ error: "Failed to summarize task" });
    }
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    getTasksByUserId,
    summarizeTask
};