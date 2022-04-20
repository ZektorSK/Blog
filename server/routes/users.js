const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('hello user');
})

router.get('/new', (req, res)=>{
    res.send('hello NEW user');
})

module.exports = router;