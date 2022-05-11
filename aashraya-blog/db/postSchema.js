
import mongoose from 'mongoose'
const postSchema  = new mongoose.Schema({

    writerName :{
        type:String,
        required : true
    },
    postTitle : {
        type:String,
        required : true
    },
    
    post : {
        type:String,
        required : true
    },
    imageUrl :{
        type:String,
        required : true
    },
    designation:{
        type:String,
        required : true
    },
    location:{
        type:String,
        required : true
    }
},
{timestamps:true}

)


export default mongoose.models.post || mongoose.model('post' , postSchema)