require('dotenv').config();

const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const mongoUri = process.env.DB_CONNECTION;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const postsRoute = require('./routes/api/blogposts');
app.use('/api/blog', postsRoute);
const commentsRoute = require('./routes/api/comments');
app.use('/api/comment', commentsRoute);

app.get('/', (req, res)=>{
    res.send('Hello');
})

app.listen(port, ()=>console.log(`Running on port ${port}`));

mongoose.connect(
    mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{console.log('Connected to DB!')}
);
