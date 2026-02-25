"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MovieHome = () => {
    const [movies,setmovies]= useState([]);
    const [search,setsearch]=useState("");
    const [pagenumber,setpagenumber] = useState(1);

    const setpagination=(n)=>{

      setpagenumber(n);

    }
 const buttons = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
  { number: 7 },
];

    const searchfun = (e)=>{
     
      const values=e.target.value;
      setsearch(values);
    }

    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e0b1a5f59bc00cdc9da099c36c7fb253&page=${pagenumber}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setmovies(data.results);
        });

    },[pagenumber])

     const filteredItems = movies.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

    return (
      <div  >


         <div className="relative w-full max-w-md mx-auto mb-10 mt-7">
        <input
          type="text"
          value={search}
          onChange={searchfun}
          placeholder="Search..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 bg-white shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
                     transition duration-300 ease-in-out text-gray-700 placeholder-gray-400"
        />

        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>


          <div className='grid grid-cols-4 gap-6 p-6'>
          {
            filteredItems.map((singlemovie,index)=>{
                return(
              
  <div key={index}  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <Link href={`/${singlemovie.id}`}>
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
    </Link>
   
 
</div>
                )
            })
          }
           
            
        </div>

        <div className='flex gap-8 justify-center mt-7 mb-7'>
          {
            buttons.map((singlebutton,index)=>{
              return(
           <button
  onClick={() => setpagination(singlebutton.number)}
  key={singlebutton.number}
  className={`
    px-4
    py-2
    min-w-[42px]
    rounded-xl
    border
    font-medium
    shadow-sm
    transition-all
    duration-200
    active:scale-95
    ${
      pagenumber === singlebutton.number
        ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
        : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500"
    }
  `}
>
  {singlebutton.number}
</button>
            )})

          }
        
          

        </div>
        
      </div>
      
    );
};

export default MovieHome;