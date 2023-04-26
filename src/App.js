import React, { useState } from "react";
import data from './data';
import "./index.css";
import Tours from './components/Tours';

const App = () => {
 
    const[tours, setTours]= useState(data);

    function removeTour(id){
        const newTours = tours.filter( tour=> tour.id !== id);
        setTours(newTours);
    }

    if(tours.length===0){
       return <div className=" flex justify-center items-center h-[100vh]">
        <div>
           <h2 className="text-3xl font-bold text-center mb-4">No Tours left</h2>
           <button onClick={ () => setTours(data)} className="border-[1px] border-solid border-[#f3eded] px-20 py-2 bg-[#f3eded] "><span className="">Refresh</span></button>
        </div>   
       </div>;
    }
    
  return (<div className="font-sans flex flex-col justify-center items-center">
             <div className=" m-[6vh] flex justify-center">
             <h2 className="border-8 border-dashed border-[#0111a0] rounded-[20px] text-5x px-[4vw] py-[2vh] font-bold inline-block text-6xl">Plan with Saurabh</h2>
             </div>
          
             <Tours tours={tours} removetour={removeTour}></Tours>
  </div>);
};

export default App;
