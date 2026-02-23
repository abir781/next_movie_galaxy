"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Singlenowjoe = () => {
    const {id}=useParams();
    console.log(id);

    const [movies,setmovies] = useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e0b1a5f59bc00cdc9da099c36c7fb253`)
        .then(res=>res.json())
        .then(data=>setmovies(data))
        
    },[id])
    return (
         <div className="min-h-screen bg-black text-white">
       
             {/* Backdrop Section */}
             <div className="relative w-full h-[60vh]">
               <Image
                 src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
                 alt={movies.title}
                 fill
                 className="object-cover brightness-50"
               />
               <div className="absolute bottom-10 left-10">
                 <h1 className="text-4xl font-bold">{movies.title}</h1>
                 <p className="italic text-gray-300 mt-2">
                   {movies.tagline}
                 </p>
               </div>
             </div>
       
             {/* Main Content */}
             <div className="grid md:grid-cols-3 gap-8 p-10">
       
               {/* Poster */}
               <div>
                 <Image
                   src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                   alt={movies.title}
                   width={350}
                   height={500}
                   className="rounded-xl shadow-lg"
                 />
               </div>
       
               {/* Details */}
               <div className="md:col-span-2 space-y-4">
       
                 <p className="text-gray-300">{movies.overview}</p>
       
                 <div className="flex flex-wrap gap-3 mt-4">
                   {movies.genres?.map((genre) => (
                     <span
                       key={genre.id}
                       className="bg-red-600 px-3 py-1 rounded-full text-sm"
                     >
                       {genre.name}
                     </span>
                   ))}
                 </div>
       
                 <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-400">
                   <p>📅 Release: {movies.release_date}</p>
                   <p>⏱ Runtime: {movies.runtime} min</p>
                   <p>⭐ Rating: {movies.vote_average}</p>
                   <p>🎬 Status: {movies.status}</p>
                 </div>
       
                 <div className="mt-6">
                   <h3 className="text-lg font-semibold mb-2">Production Companies</h3>
                   <div className="flex flex-wrap gap-4">
                     {movies.production_companies?.map((company) => (
                       <span
                         key={company.id}
                         className="bg-gray-800 px-3 py-1 rounded-md text-sm"
                       >
                         {company.name}
                       </span>
                     ))}
                   </div>
                 </div>
       
               </div>
             </div>
           </div>
    );
};

export default Singlenowjoe;