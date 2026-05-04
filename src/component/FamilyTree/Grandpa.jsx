import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunty from './Aunty';


const Grandpa = () => {
    return (
        <div className=''    >
            <h3>Grandpa</h3>
          
               <Dad />
                <Uncle />
                <Aunty />
            
        </div>
    );
};

export default Grandpa;