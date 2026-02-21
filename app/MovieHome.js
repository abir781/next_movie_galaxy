"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MovieHome = () => {
    const [movies,setmovies]= useState([]);

    useEffect(()=>{

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=e0b1a5f59bc00cdc9da099c36c7fb253")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setmovies(data);
        });

    },[])
    return (
        <div className='grid grid-cols-4 gap-6 p-6'>
          {
            movies.results?.map((singlemovie,index)=>{
                return(
              
  <div key={index}  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <Image
      src={`https://image.tmdb.org/t/p/w500${singlemovie.poster_path}`}
      alt={singlemovie.title}
      width={300}
      height={450}
      className="w-full object-cover"
      style={{ borderRadius: "8px 8px 0 0" }}
    />
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800 truncate">{singlemovie.original_title}</h2>
      <p className="text-sm text-gray-500 mt-2 line-clamp-3">{singlemovie.overview}</p>
      <p className="text-sm font-semibold text-yellow-500 mt-3">⭐ {singlemovie.popularity}</p>
    </div>
 
</div>
                )
            })
          }
           
            
        </div>
    );
};

export default MovieHome;