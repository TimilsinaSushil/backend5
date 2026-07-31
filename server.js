const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const connectDB = require('./src/config/db');
connectDB();
const app = express();
const TaskRoutes = require('./src/Routes/TaskRoutes');
const AuthRoutes = require('./src/Routes/AuthRoutes')
const VerifyToken = require('./src/Middlewares/VerifyToken')
const passport = require('passport');
require('./src/config/passport');
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/task', VerifyToken, TaskRoutes);
app.use('/auth', AuthRoutes);


app.listen(PORT, () => {
    console.log('Express Server is running on port', PORT);
})