import React from 'react';
import Genrebasedpage from './Genrebasedpage';

const Singlegenrepage = async({params}) => {
    
    return (
        <div>
            <Genrebasedpage params={params}></Genrebasedpage>
        </div>
    );
};

export default Singlegenrepage;