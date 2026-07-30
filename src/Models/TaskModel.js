const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide the title'],
            trim: true,
            maxlength: 100
        },
        description: {
            type: String,
            trim: true,
            maxlength: 500,
            default: ''
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'medium'
        },
        completed: {
            type: Boolean,
            default: false
        },
        // Link to the User model
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide the user']
        }

    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Task', TaskSchema)
