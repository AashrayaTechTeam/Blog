import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header"

export default function CreatePost() {
    

    const [postTitle,setPostTitle]=useState();
    const [post,setPost]=useState();
    const [writerName,setWriterName]=useState();
    const [imageUrl,setImageUrl]=useState();
    const [designation,setDesignation]=useState();
    const [location,setLocation]=useState();

    
    const savePost =async(e)=>{

        e.preventDefault();
    
        const res =  await fetch(`${baseUrl}/api/Post` , {
           method:"POST",
           headers:{
            'Content-Type':'application/json'
           },
           body:JSON.stringify({
            postTitle, post, writerName, imageUrl, designation, location
           }) 
       })
       const res2 = await res.json()
       if(res2.error){
           console.log(res2.error)
       }
       else{
        console.log("SUCCESSFUL")
       }
       alert("POST ADDED") 
    }



    
    return(
        <>
        <Header/>
        <form className="form_card">
        <h1>Create Post</h1>
            <input type="text" placeholder="Heading"
            name="postTitle" value={postTitle} 
            onChange={(e)=>{setPostTitle(e.target.value)}}
            />
            <textarea type="text" placeholder="Post" style={{height:"200px"}}
            name="post" value={post} 
            onChange={(e)=>{setPost(e.target.value)}}
            ></textarea>
            <input type="text" placeholder="Writer Name"
            name="writerName" value={writerName} 
            onChange={(e)=>{setWriterName(e.target.value)}}
            />
            <input type="text" placeholder="Photo Url"
            name="imageUrl" value={imageUrl} 
            onChange={(e)=>{setImageUrl(e.target.value)}}
            />
            <input type="text" placeholder="Designation"
            name="designation" value={designation} 
            onChange={(e)=>{seDesignation(e.target.value)}}
            />
            <input type="text" placeholder="Location"
            name="location" value={location} 
            onChange={(e)=>{setLocation(e.target.value)}}
            />
            <input onClick={savePost} style={{background:"black",color:"white",fontSize:"17px",letterSpacing:"1.5px"}} type="submit"/>
        </form>
        </>
    )
}
