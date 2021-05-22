import IBlog from '../types/blog';
import {Schema,model} from 'mongoose';

const blogSchema :Schema = new Schema({
    title :{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    content: {
        type:String,
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    userId:{
        type:String,
        required: true,
        // default : {"007"}
    }
},{
    timestamps: true
})


export  default model<IBlog>("Blog",blogSchema)