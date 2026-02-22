"use client"
import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Toprated = () => {
    const [toprated, settoprated] = useState([]);
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e0b1a5f59bc00cdc9da099c36c7fb253')
        .then(res=>res.json())
        .then(data=>settoprated(data.results))

    })
    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                toprated.map((singletop,index)=>{
                    return(
                        <div key={index}>
                           
                            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height:300 }}
        image={`https://image.tmdb.org/t/p/w500${singletop.poster_path}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {singletop.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {singletop.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{singletop.vote_average}</Button>
        <Button size="small">{singletop.vote_count}</Button>
      </CardActions>
    </Card>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Toprated;