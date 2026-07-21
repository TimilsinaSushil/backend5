const express = require('express');
const connectDB = require('./src/config/db');
connectDB();
const app = express();
const TaskRoutes = require('./src/Routes/TaskRoutes');
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/task', TaskRoutes);


app.listen(5000, ()=>{
    console.log('Express Server is running on port 5000');
})