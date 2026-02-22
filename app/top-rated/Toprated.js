"use client"
import React, { useEffect, useState } from 'react';
import CardImage from './CardImage';

const Toprated = () => {
    const [toprated, settoprated] = useState([]);
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e0b1a5f59bc00cdc9da099c36c7fb253')
        .then(res=>res.json())
        .then(data=>settoprated(data.results))

    })
    return (
        <div>
            {
                toprated.map((singletop,index)=>{
                    return(
                        <div key={index}>
                           
                         <p>{singletop.title}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Toprated;