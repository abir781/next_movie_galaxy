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
  const [loading,setloading]=useState(true);

useEffect(() => {
  let timer;

  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e0b1a5f59bc00cdc9da099c36c7fb253")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .then((data) => {
      setToprated(data.results);
      timer = setTimeout(() => {
        setloading(false);
      }, 3000);
    })
    .catch((err) => {
      setError(err.message);
      timer = setTimeout(() => {
        setloading(false);
      }, 3000);
    });

  return () => clearTimeout(timer); // ✅ proper cleanup
}, []); // ✅ dependency array দেওয়া জরুরি


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
    <div className="grid grid-cols-4 gap-5">
      {toprated.map((singletop) => (
        <div key={singletop.id}>
          <Link href={`/top-rated/${singletop.id}`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={`https://image.tmdb.org/t/p/w500${singletop.poster_path}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {singletop.title}
                </Typography>
                <Typography variant="body2">
                  {singletop.overview}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{singletop.vote_average}</Button>
                <Button size="small">{singletop.vote_count}</Button>
              </CardActions>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Toprated;