import Image from 'next/image';
import React from 'react';

const Nowrender = async() => {
      const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e0b1a5f59bc00cdc9da099c36c7fb253",
    // { next: { revalidate: 60 } } // optional caching
  );

  const data = await res.json();
     return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {data.results?.map((movie) => (
        <div key={movie.id} className="bg-white rounded-xl shadow-md overflow-hidden">
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
        </div>
      ))}
    </div>
  );
};

export default Nowrender;