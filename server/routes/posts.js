import express from "express";
import {getPosts,createPost,updatePost} from "../controllers/posts.js"
const router=express.Router();

router.get("/",getPosts);
router.post("/",createPost);
//to update things thats exist in the docs, we use patch
router.patch("/:id",updatePost)

//same as module.export but we are able to use it as react syntax because we changed type to modularity in jsonfile
export default router;