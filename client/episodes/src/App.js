import React,{useState,useEffect} from "react";
import "./App.css";
import {useDispatch} from "react-redux"
import Posts from "./componenets/Posts/Posts.js"
import Form from "./componenets/Form/Form.js"
import * as api from "./api"
import {fetchAll} from "./reducers/userPosts"

const App=()=>{
    const [currentId,setCurretnId]=useState(null);
const dispatch=useDispatch();

useEffect(()=>{
    const d=async()=>{
       try{
           const {data}=await api.fetchPosts();
            console.log(data);
           if(data)
           {
            dispatch(fetchAll({
             posts:data,
                    }))
           }

       } catch(error){
           console.log(error.message);
       }
   }
  d();
},[dispatch])

    return (
        <div className="app-body">
              <a name="top"></a>
            <div id="navbar">
                <h1 className="nav_header"><a href="#top">✨ Episodes ✨</a></h1>
            </div>
            <div className="page">
            <div className="page-posts">
            <Posts setCurretnId={setCurretnId} />
            </div>
                  <div className="page-form" >
                  <Form currentId={currentId} setCurretnId={setCurretnId} />
                  </div>
                
            </div>
        </div>
    )
}

export default App;