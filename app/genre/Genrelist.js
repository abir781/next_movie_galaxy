import React from "react";
import Link from "next/link";

const Genrelist = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=e0b1a5f59bc00cdc9da099c36c7fb253"
  );

  const data = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.genres?.map((tracker) => (
        <Link
          key={tracker.id}
          href={`/genre/${tracker.id}`}
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                     text-white text-lg font-semibold py-6 rounded-xl 
                     text-center hover:scale-105 transition transform duration-300 shadow-lg"
        >
          {tracker.name}
        </Link>
      ))}
    </div>
  );
};

export default Genrelist;