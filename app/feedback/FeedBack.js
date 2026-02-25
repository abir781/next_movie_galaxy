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

    const graveofthefirflies =()=>{
        
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

<ul className="w-full max-w-xl mx-auto mt-6 space-y-4">
  {
    rendertextdata.map((renders, index) => {
      return (
        <div key={index} className="flex items-center gap-4">
  <li
    className="
      px-6
      py-4
      bg-white
      rounded-2xl
      shadow-md
      border border-gray-200
      text-gray-700
      text-lg
      font-medium
      transition-all
      duration-300
      hover:shadow-xl
      hover:scale-[1.02]
      hover:bg-indigo-50
      flex
      gap-4
      flex-1
    "
  >
    {renders}
  </li>

  <button onClick={graveofthefirflies} className="bg-amber-500 px-4 py-2 rounded-lg">
    X
  </button>
</div>
      
      );
    })
  }
</ul>


       
        

      </div>

      

    </div>
  );
};

export default FeedBack;