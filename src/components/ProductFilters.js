const ProductFilters = () => {
  return (
    <div>
      <span> Filter Products</span>
      <label className=" ">
        <input
          type="radio"
          
          name="group1"
         
        />
        <span className=" ">Ascending</span>
      </label>
      <label className=" ">
        <input
          type="radio"
          
          name="group1"
         
        />
        <span className="ml-2">Descending</span>
      </label>
      <label className=" ">
        <input type="checkbox"  />
        <span className="ml-2">Include Out of stock</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox"  />
        <span className="ml-2">Fast Delivery Only</span>
      </label>
      <button
        
        className="mx-auto lg:mx-0 hover:underline bg-blue-200 text-white font-bold rounded-3xl mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        clear
      </button>
    </div>
  );
};

export default ProductFilters;
