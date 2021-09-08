import {createSlice} from "@reduxjs/toolkit"


const initialState={
posts:[],
};



const userSlice=createSlice({
name: "user",
initialState,
reducers:{
   fetchAll:(state,action)=>{
     
      state.posts=action.payload.posts;

   },
    createPost:(state=[],action)=>{
       console.log(action.payload.posts)
       console.log(state.posts)
       state.posts.push(action.payload.posts);
    }
}
});

export default userSlice.reducer;

export const {fetchAll,createPost}=userSlice.actions;

export const selectPosts =(state)=> state.user.posts