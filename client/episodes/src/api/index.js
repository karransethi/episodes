import axios from "axios";


//connects to backend
const url= "https://episodes-project.herokuapp.com/posts";

export const fetchPosts = ()=> axios.get(url)

export const createPost=(newPost)=>axios.post(url,newPost)


export const updatePost=(id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost)