const express = require('express');
const PORT = process.env.PORT;
const connectDB = require('./src/config/db');
connectDB();
const app = express();
const TaskRoutes = require('./src/Routes/TaskRoutes');
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/task', TaskRoutes);


app.listen(PORT, ()=>{
    console.log('Express Server is running on port 5000');
})