import { createSlice } from "@reduxjs/toolkit";

const feedslice = createSlice({
    name:'feedblow',
    initialState:{
        feedtext:"",
        rendertext:[],
    },
    reducers:{
        setfeedtext:(state,action)=>{
            state.feedtext=action.payload;
        },
        setrendertext:(state,action)=>{
               state.rendertext=[...state.rendertext,action.payload]
        }

       
    }
})


export const {setfeedtext,setrendertext} = feedslice.actions;
export default feedslice.reducer;