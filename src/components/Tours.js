import React from "react";
import Card from './Card';
import '../index.css';

function Tours({tours,removetour}){


    return (<div className="flex flex-wrap justify-center w-[75%]">
        {
            
         tours.map((tour) => {
             return <Card {...tour} removetour={removetour} ></Card>
         })
        }
    </div>);
}

export default Tours; 