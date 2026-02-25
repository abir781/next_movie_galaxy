"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setfeedtext,setrendertext } from '../Redux_kit/feature';

const FeedBack = () => {
    const dispatch = useDispatch();
    const textdata = useSelector((state)=>state.feedx.feedtext);
    const rendertextdata = useSelector((state)=>state.feedx.rendertext);
    const jonecall =(e)=>{
        
        let textv= e.target.value;
        console.log(textv);
        dispatch(setfeedtext(textv))
    }

    const rendertextfun=()=>{

        dispatch(setrendertext(textdata))



    }
    return (
    <div className="flex  justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      
      <div className="w-full max-w-2xl">
        
        <label className="block mb-3 text-lg font-semibold text-slate-700">
          Add your thougt
        </label>

        <textarea
          placeholder="Write something amazing..."
          onChange={jonecall}
          className="
          w-full
          h-60
          px-6
          py-4
          text-lg
          rounded-3xl
          border border-slate-300
          bg-white
          shadow-lg
          resize-none
          transition-all duration-300
          focus:outline-none
          focus:ring-4
          focus:ring-indigo-300
          focus:border-indigo-500
          hover:shadow-xl
          "
        ></textarea>

       <button
        onClick={rendertextfun}
            className="
  px-8
  py-3
  text-lg
  font-semibold
  block
  mx-auto
  text-white
  rounded-2xl
  bg-gradient-to-r
  from-indigo-500
  to-purple-600
  shadow-lg
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-xl
  active:scale-95
  "
>
  Add
</button>

<ul>

    {
    rendertextdata.map((renders,index)=>{
         return(

            <li key={index}>{renders}</li>
           
        )

    }
       
    )
}


</ul>


       
        

      </div>

      

    </div>
  );
};

export default FeedBack;