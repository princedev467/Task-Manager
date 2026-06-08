require('dotenv').config();
const express=require('express');
const app=express();

const routes=require('./routes/task.routes');
const mongodbConnnect = require('./database/mongoDbConnect');

const cors=require('cors');
const cookieParser = require('cookie-parser');


app.use(express.json());


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());

mongodbConnnect();

app.use('/api/auth', require('./routes/user.routes'));
app.use('/api/tasks', require('./routes/task.routes'));

app.listen(process.env.PORT,()=>{
    console.log(`Server Started At ${process.env.PORT}`);
    
})