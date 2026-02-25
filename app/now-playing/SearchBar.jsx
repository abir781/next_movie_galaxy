// "use client";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function SearchBar() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const handleChange = (e) => {
//     const value = e.target.value;
//     router.push(`?search=${value}`);
//   };

//   return (
//     <input
//       defaultValue={searchParams.get("search") || ""}
//       onChange={handleChange}
//       placeholder="Search..."
//       className="w-200 h-200 bg-amber-600"
//     />
//   );
// }
"use client";
import React from 'react';

import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
   const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const value = e.target.value;
    router.push(`?search=${value}`);
  };

  return (
  


      <div className="relative w-full max-w-md mx-auto mb-10 mt-7">
        <input
          type="text"
           defaultValue={searchParams.get("search") || ""}
          onChange={handleChange}
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
  );
};

export default SearchBar;