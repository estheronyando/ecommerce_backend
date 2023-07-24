const express=require('express');
const getDatabase=require('./config/db');
const userRouter=require('./routes/userRouter');
const productRouter=require('./routes/productRouter');
const cors = require('cors');


const app=express();


let db=getDatabase();
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length'],
    credentials: true,
  }));
app.use(express.json());


app.use('/api/user', userRouter);

app.use('/api', productRouter);

// process.env.PORT ||

let PORT=process.env.PORT||5000

app.listen(PORT, ()=>{
    console.log("Server is running on port "+PORT)
});