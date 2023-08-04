import { configureStore } from "@reduxjs/toolkit";
import conatctSlice from './contactSlice'
import authSlice from './authSlice'
import userSlice from './userSlice'

export default configureStore({
    reducer:{
        contact : conatctSlice,
        authuser : authSlice,
        account : userSlice
        
    }
})