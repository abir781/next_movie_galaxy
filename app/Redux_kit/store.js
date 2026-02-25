import { configureStore } from "@reduxjs/toolkit";
import feedreducer from "./feature";

const store=configureStore({
    reducer:{
        feedx:feedreducer,
    }
})

export default store;