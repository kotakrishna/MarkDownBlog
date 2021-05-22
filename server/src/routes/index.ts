import {Router} from 'express';
import {getBlog,addBlog, updateBlog,deleteBlog,getBlogId} from '../controllers/blogs/index'
const route :Router =Router();


route.get("/blog",getBlog)

route.post("/add-blog",addBlog)

route.get("/get-blog/:id",getBlogId)

route.put("/update-blog/:id",updateBlog)

route.delete("/delete-blog/:id",deleteBlog)

export default route;