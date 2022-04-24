const express = require('express');
const router = express.Router();
const Post = require('../../models/BlogPost');

router.get('/', (req, res)=>{
    res.send('hello user');
});

router.post('/', async (req, res)=>{
    const post = new Post({
       title: req.body.title,
       description: req.body.description 
    });
    
    const savedPost = await post.save();
    res.json(savedPost);
});

module.exports = router;