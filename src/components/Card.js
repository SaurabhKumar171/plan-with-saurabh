import React, { useState } from "react";
import '../index.css';


function Card({id,name,info,image,price,removetour}){

    const[readmore , setReadmore] = useState(false);

      const description = readmore ? info : `${info.substring(0,200)}....`;

      function readmoreHandler(){
        setReadmore(!readmore);
      }

        return (
            <div className="w-[400px] flex flex-col items-center rounded-[10px] p-[1rem] m-[1rem] h-max shadow-[0_3px_8px_rgba(0,0,0,.24)]">
                <img src={image} className="aspect-square object-cover w-[380px]" alt=""/>

                <div className="mx-[5px] my-[20px]">
                    <div className="tour-details">
                        <h4 className="text-[#1faa59] text-[1.5rem] font-bold">₹{price}</h4>
                        <h4 className="text-[1.5rem] pb-[2px] font-extrabold">{name}</h4>
                    </div>

                    <div className="description text-xl">
                           {description}
                           <span className="text-[#12b0e8] cursor-pointer hover:text-[#2f7892]" onClick={readmoreHandler}>
                              {readmore ? `show less`:`show more`}
                           </span>
                    </div>
                </div>

                <button className="text-xl border-[1px] border-solid bg-[#b4161b21] border-[#b4161b] px-[80px] py-[10px] rounded-xl font-bold hover:bg-[red] hover:text-[#fff] transition-all duration-[100ms]" onClick={() => removetour(id)}>
                    Not interested
                </button>

            </div>
        );
}

export default Card;