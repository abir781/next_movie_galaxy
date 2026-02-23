import React from 'react';

const Genrebasedpage =async({params}) => {
    const genreid=params.id;
    console.log(genreid)

    // const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e0b1a5f59bc00cdc9da099c36c7fb253&with_genres=${params.id}`);
    // const data = await res.json();
    // console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Genrebasedpage;