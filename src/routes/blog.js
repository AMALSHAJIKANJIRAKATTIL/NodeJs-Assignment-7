const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here
let arr=[];

router.get('/blog',async (req,res)=>{
    console.log(req.query);
    if(req.query.id){
        arr = await Blog.find({_id : req.query.id});
    }
    else{
        arr = await Blog.find();
    }
    console.log(arr);
    res.status(200).json({status : "Success",
"Data" : arr})
    
})

router.post('/blog',async (req,res)=>{
    console.log('Posted...');
    //console.log(req.body);

    let data=await Blog.create(req.body) ;
    console.log(data);
    res.send(data)
})

module.exports = router;