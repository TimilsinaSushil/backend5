const { body } = require('express-validator');

const registerRules = [
    body('first_name').isString().withMessage('First name must be a string').trim().notEmpty().withMessage('First name is required'),
    body('last_name').isString().withMessage('Last name must be a string').trim().notEmpty().withMessage('Last name is required'),
    body('email').trim().isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('confirm_password').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match');
        }
        return true;
    })
];

module.exports = { registerRules };