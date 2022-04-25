const express = require('express');
const { deleteOne } = require('../../models/BlogPost');
const router = express.Router();
const Post = require('../../models/BlogPost');

router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async (req, res)=>{
    const post = new Post({
       title: req.body.title,
       description: req.body.description 
    });
    try{
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.delete('/:id', async(req, res)=>{
    try{
        await Post.deleteOne({_id: req.params.id});
        res.status(200).send(`Sucessfully deleted post with id: ${req.params.id}`);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;