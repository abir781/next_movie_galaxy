import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';


// import React, { useState } from 'react';

const Nowrender = async({ searchParams }) => {
  // const [search,setsearch] = useState("");

  const search = searchParams?.search || "";
      const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e0b1a5f59bc00cdc9da099c36c7fb253",
    // { next: { revalidate: 60 } } // optional caching
  );
  const data = await res.json();
  // const searchfun=(e)=>{
  //   const runner=e.target.value;
  //   console.log(runner);

  // }

    const filtered = data.results.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
     return (
      <div>

       <SearchBar></SearchBar>

           {/* <div className="relative w-full max-w-md mx-auto mb-10 mt-7">
        <input
          type="text"
          value={search}
          // onChange={searchfun}
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
      </div> */}

     

          <div className="grid grid-cols-4 gap-6 p-6">
      {filtered.map((movie) => (

        <div key={movie.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <Link href={`/now-playing/singlenow/${movie.id}`}>

                 <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{movie.original_title}</h2>
            <p className="text-sm text-gray-500 line-clamp-3">{movie.overview}</p>
            <p className="text-sm font-semibold text-yellow-500 mt-2">⭐ {movie.popularity}</p>
          </div>
          </Link>
          
        </div>
      ))}
    </div>

      </div>
    
  );
};

export default Nowrender;