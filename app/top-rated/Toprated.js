// "use client";
// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Link from "next/link";
// import "./toprated.css";

// const Toprated = () => {
//   const [toprated, setToprated] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading,setloading]=useState(true);
//   const [search,setsearch]=useState("");

//   const searchfun=(e)=>{
//     const value = e.target.value;

//     console.log(value);
//     setsearch(value);
    
    

// const filteredItems =
//   search.trim() === ""
//     ? toprated
//     : toprated.filter(item =>
//         item.title.toLowerCase().includes(search.toLowerCase())
//       );
// setToprated(filteredItems);


//   }

// useEffect(() => {
//   let timer;

//   fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e0b1a5f59bc00cdc9da099c36c7fb253")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       setToprated(data.results);
//       timer = setTimeout(() => {
//         setloading(false);
//       }, 3000);
//     })
//     .catch((err) => {
//       setError(err.message);
//       timer = setTimeout(() => {
//         setloading(false);
//       }, 3000);
//     });

//   return () => clearTimeout(timer); // ✅ proper cleanup
// }, []); // ✅ dependency array দেওয়া জরুরি


// if (loading) {
//   return (
//     <div className="lds-circle">
//       <div></div>
//     </div>
//   );
// }

//   if (error) {
//     return <h2>Error: {error}</h2>;
//   }

//   return (
//     <div >
     
//   <div class="relative w-full max-w-md mx-auto mb-10">

//        <input
//       type="text"
//       onChange={searchfun}
//       placeholder="Search..."
//       class="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 bg-white shadow-sm 
//              focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
//              transition duration-300 ease-in-out text-gray-700 placeholder-gray-400"
//     />


//       <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
//       <svg 
//         class="w-5 h-5 text-gray-400" 
//         fill="none" 
//         stroke="currentColor" 
//         stroke-width="2" 
//         viewBox="0 0 24 24">
//         <path stroke-linecap="round" stroke-linejoin="round"
//           d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
//       </svg>
//     </div>

//   </div>
    
   

//     <div className="grid grid-cols-4 gap-5">

//           {toprated.map((singletop) => (
//         <div key={singletop.id}>
//           <Link href={`/top-rated/${singletop.id}`}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardMedia
//                 sx={{ height: 300 }}
//                 image={`https://image.tmdb.org/t/p/w500${singletop.poster_path}`}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5">
//                   {singletop.title}
//                 </Typography>
//                 <Typography variant="body2">
//                   {singletop.overview}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">{singletop.vote_average}</Button>
//                 <Button size="small">{singletop.vote_count}</Button>
//               </CardActions>
//             </Card>
//           </Link>
//         </div>
//       ))}
    

//     </div>

    
  


      
     
//     </div>
//   );
// };

// export default Toprated;


"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "./toprated.css";

const Toprated = () => {
  const [toprated, setToprated] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ✅ Only update search state
  const searchfun = (e) => {
    setSearch(e.target.value);
  };

  // ✅ Fetch Data
  useEffect(() => {
    let timer;

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e0b1a5f59bc00cdc9da099c36c7fb253"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setToprated(data.results);
        timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setError(err.message);
        timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      });

    return () => clearTimeout(timer);
  }, []);

  // ✅ Derived Filtering (BEST PRACTICE)
  const filteredItems = toprated.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      {/* 🔍 Search Bar */}
      <div className="relative w-full max-w-md mx-auto mb-10">
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

      {/* 🎬 Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((singletop) => (
          <div key={singletop.id}>
            <Link href={`/top-rated/${singletop.id}`}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={`https://image.tmdb.org/t/p/w500${singletop.poster_path}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {singletop.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {singletop.overview.slice(0, 100)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    ⭐ {singletop.vote_average}
                  </Button>
                  <Button size="small">
                    👥 {singletop.vote_count}
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toprated;