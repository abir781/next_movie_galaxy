import React from 'react';
import Nowrender from './Nowrender';

const Nowpage = async({ searchParams }) => {
     const params = await searchParams;
    return (
        <div>

            <Nowrender searchParams={params}></Nowrender>
            
        </div>
    );
};

export default Nowpage;