import {Response, Request} from 'express';
import IBlog from '../../types/blog';
import Blog from '../../models/blog';
import { isTryStatement } from 'typescript';



export const getBlog = async (req:Request, res:Response):Promise<void>=>{
    try{
        const blogs :IBlog[] = await Blog.find()
        res.status(202).json({blogs})
    }catch(error){
        console.log(error)
    }
}

export const addBlog =async (req:Request, res:Response) :Promise<void>=>{
    try {
        // res.status(203).json({"name":"kota"})
        // const blog = await Blog.create(req.body)
        let body=req.body as Pick<IBlog, "title"|"description" | "content"| "createdAt" | "userId">
        console.log(body)
        const blog:IBlog =new Blog({
            title:body.title,
            description:body.description,
            content:body.content,
            createdAt:body.createdAt,
            userId:body.userId
        })
        console.log(blog)
        const newBlog : IBlog =await blog.save();
        const allBlogs:IBlog[]= await Blog.find()
        
        res.status(203).json({message: "new Blog as been added ", blog: newBlog ,blogs:allBlogs})
    } catch (error) {
        res.end()
        console.log(error)
    }   
}


export const updateBlog=async (req: Request, res: Response):Promise<void>=>{
    try{
        
        const {params:{id}, body} =req;
        console.log(body,id)
        const updatedBlog:IBlog|null = await Blog.findByIdAndUpdate({_id:id},body)
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allBlogs:IBlog[]= await Blog.find()
        
        res.status(202).json({message: "new Blog as been added ", blog: updatedBlog ,blogs:allBlogs})
        // console.log("new")
        
    }catch (error) {
        console.log(error)
    }
}

export const getBlogId = async(req: Request, res: Response): Promise<void>=> {
    try {
        const {params:{id}} =req;
        const blog:IBlog |null = await Blog.findById({_id:id})
        res.status(202).json({message:"found",blog:blog})
    } catch (error) {
        console.log(error)
    }
}


export const deleteBlog = async (req: Request, res: Response):Promise<void>=> {
    try{
        const deleteBlog:IBlog|null = await Blog.findByIdAndRemove(req.params.id)
        const allBlogs:IBlog[]= await Blog.find()
        res.status(200).json({message:"Blog Deleted" ,blog:deleteBlog,blogs:allBlogs})
        
    }catch (error) {
        console.log(error)
    }
}