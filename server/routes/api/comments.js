const express = require('express');
const router = express.Router();
const cPost = require('../../models/CommentPost');

router.get('/', async(req, res)=>{
    try{
        const posts = await cPost.find();
        res.status(200).json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/', async(req, res)=>{
    try{
        const post = new cPost({
            postId: req.body.postId,
            author: req.body.author,
            text: req.body.text,
            date: req.body.date
        });
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.json({message:err});
    }
});

router.delete('/:id', async(req, res)=>{
    try{
        await cPost.deleteOne({_id: req.params.id});
        res.status(200).send(`Sucessfully deleted post with id: ${req.params.id}`);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;