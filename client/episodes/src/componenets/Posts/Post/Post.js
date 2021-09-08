import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment"


const styleP=makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      },
      border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      },
      overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
      },
      overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
})


function Post({post,setCurrentId}) {
    const classes=styleP();
    return (
        <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} /> 
         <div className={classes.overlay}>
           <Typography variant="h6">{post.creater}</Typography>
           <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
         </div>
         <div className={classes.overlay2}>
          <Button style={{color:"white"}} size="small" 
          onClick={()=>setCurrentId(post._id)} >
              <MoreHorizIcon fontSize="default" />
          </Button>
         </div>
         <div className={classes.details}>
         <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
         </div>
         <CardContent>
         <Typography variant="h5" gutterBottom>{post.message}</Typography>
         </CardContent>
         <CardActions className={classes.cardActions}>
             <Button size="small" color="primary" onClick={()=>{}}>
                 <ThumbUpAltIcon fontSize="small" />
                 Like
             </Button>
             <Button size="small" color="primary" onClick={()=>{}}>
                 <DeleteIcon fontSize="small" />
                 Delete
             </Button>
         </CardActions>
        </Card>
    )
}

export default Post