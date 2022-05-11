// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from '../../db/initDB'
import Post from '../../db/postSchema'
initDB()

export default async (req , res )=>{

    switch(req.method)
    {
        case "GET" :
             await allPost(req,res);
            break;
        case "POST":
             await savePost(req , res);
             break;
    }

   
}



const allPost = async (req ,res)=>{

    Post.find().then(posts=>{
        res.status(200).json(posts)
    })
}

const savePost = async (req , res) =>{
    const {postTitle, post, writerName, imageUrl, designation, location} = req.body;
    const postSave = await new Post({
      postTitle, post, writerName, imageUrl, designation, location
    }).save()
    res.status(201).json(postSave);
}