const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    console.log('Here!');
    res.send('HOME');
})

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);