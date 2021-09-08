import React,{useState} from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button,Typography,Paper} from "@material-ui/core"
import FileBase from "react-file-base64"
import {useDispatch} from "react-redux"
import * as api from "../../api"
import {createPost} from "../../reducers/userPosts"


const styledPaper=makeStyles({
     field:{
         width:"70%",
         
     },  
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding:5,
        fontFamily:"Montserrat",
        boxShadow: "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
      },
      typo:{
        fontFamily:"Montserrat"
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
          marginTop: 5,
        marginBottom: 10,
      },
})

function Form({currentid,setCurrentId}) {


   const classes=styledPaper();
   const dispatch=useDispatch();

    const [postData,setPostData]=useState({
        creater:"",
        title:"",
        message:"",
        tags:"",
        selectedFile:""
    })
    const handleSubmit =(e)=>{
      e.preventDefault();
     
        
      const d=async()=>{
            try{
             const {config}=await api.createPost(postData);
             const pp=JSON.parse(config.data);
             console.log(pp);
                  
                    dispatch(createPost({
                      posts:pp,
                    }))
                 
            }
            catch(err){
             console.log(err.message);
            } 
          }
      d();
    }
    

    const clear=()=>{

    }

    return (
      
         <Paper >
           <form className={` ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
             <Typography className={classes.typo} variant="h6">Create an Episode</Typography>
           <TextField 
           className={classes.field}
           name="creater" 
           variant="outlined" 
           label="Creater" 
           fullWidth
           value={postData.creater}
           onChange={(e)=> {
         setPostData({...postData,creater:e.target.value})
   
         }}
            />
                <TextField 
                className={classes.field}
           name="title" 
           variant="outlined" 
           label="Title" 
           fullWidth
           value={postData.title}
           onChange={(e)=> setPostData({...postData,title:e.target.value})}
            />
            <TextField 
            className={classes.field}
           name="message" 
           variant="outlined" 
           label="Message" 
           fullWidth
           value={postData.message}
           onChange={(e)=> setPostData({...postData,message:e.target.value})}
            />
            <TextField 
            className={classes.field}
           name="tags" 
           variant="outlined" 
           label="Tags" 
           fullWidth
           value={postData.tags}
           onChange={(e)=> setPostData({...postData,tags:e.target.value.split(',')})}
            />
            <div>
               <FileBase
               type="file"
               multiple={false}
               onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
                />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
           </form>
       </Paper>
      
    )
}

export default Form
