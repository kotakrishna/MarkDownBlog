"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.getBlogId = exports.updateBlog = exports.addBlog = exports.getBlog = void 0;
const blog_1 = __importDefault(require("../../models/blog"));
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_1.default.find();
        res.status(202).json({ blogs });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getBlog = getBlog;
const addBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // res.status(203).json({"name":"kota"})
        // const blog = await Blog.create(req.body)
        let body = req.body;
        console.log(body);
        const blog = new blog_1.default({
            title: body.title,
            description: body.description,
            content: body.content,
            createdAt: body.createdAt,
            userId: body.userId
        });
        console.log(blog);
        const newBlog = yield blog.save();
        const allBlogs = yield blog_1.default.find();
        res.status(203).json({ message: "new Blog as been added ", blog: newBlog, blogs: allBlogs });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.addBlog = addBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        console.log(body, id);
        const updatedBlog = yield blog_1.default.findByIdAndUpdate({ _id: id }, body);
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allBlogs = yield blog_1.default.find();
        res.status(202).json({ message: "new Blog as been added ", blog: updatedBlog, blogs: allBlogs });
        // console.log("new")
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateBlog = updateBlog;
const getBlogId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const blog = yield blog_1.default.findById({ _id: id });
        res.status(202).json({ message: "found", blog: blog });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getBlogId = getBlogId;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteBlog = yield blog_1.default.findByIdAndRemove(req.params.id);
        const allBlogs = yield blog_1.default.find();
        res.status(200).json({ message: "Blog Deleted", blog: deleteBlog, blogs: allBlogs });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteBlog = deleteBlog;
