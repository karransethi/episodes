import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import postReducer from "../reducers/userPosts"

//boiler plate
export default configureStore({
    reducer:{
        user:postReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck:false,
     }),
});