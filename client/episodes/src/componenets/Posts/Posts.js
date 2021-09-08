import React from 'react'
import Post from "./Post/Post"
import {useSelector} from "react-redux";
import {selectPosts} from "../../reducers/userPosts"
import {Grid,CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styledPost =makeStyles({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      smMargin: {
        margin: "2px",
      },
      actionDiv: {
        textAlign: 'center',
      }
})

function Posts({setCurrentId}) {
    const classes=styledPost();
   const posts =useSelector(selectPosts);
   console.log(posts);
    return (
        
            !posts.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
            )
      
    )
}

export default Posts
