import React from 'react';
import Genrebasedpage from './Genrebasedpage';

const Singlegenrepage = async({params}) => {

    const {id}= await params;
   
    
    return (
        <div>
            <Genrebasedpage id={id}></Genrebasedpage>
        </div>
    );
};

export default Singlegenrepage;