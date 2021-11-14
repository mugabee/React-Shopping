import Rating from "./Rating";
import { useState } from "react";

const ProductFilters = () => {
    const [rating, setRate] = useState( );


  return (
    <div className="bg-gray-500 py-8 text-white grid grid-flow-row auto-rows-max">
      <span className=" py-4 text-3xl mx-10"> Products Filter</span>
      <label className=" py-1 text-xl mx-10 ">
        <input
          type="radio"     
          name="group1"        
        />
        <span className=" ">Ascending</span>
      </label>
      <label className=" py-1 text-xl mx-10 ">
        <input
          type="radio"        
          name="group1"      
        />
        <span className=" ">Descending</span>
      </label>
      <label className=" py-1 text-xl mx-10 ">
        <input type="checkbox"  />
        <span className="ml-2">Include Out of stock</span>
      </label>
      <label className="py-1 text-xl mx-10 ">
        <input type="checkbox"  />
        <span className=" ">Fast Delivery Only</span>
      </label>

      <label className="py-1 text-xl mx-10 grid grid-flow-col auto-cols-max ">Rating:
      <Rating rating={rating}

       onClick={(i) => setRate(i + 1 )}
       style={{ cursor: "pointer" }}
       />

      </label>
          
      <button
        
        className="mx-auto lg:mx-0 hover:underline bg-blue-700 text-white font-bold rounded-3xl mt-4 lg:mt-0 py-2 px-4 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        clear
      </button>
    </div>
  );
};

export default ProductFilters;
