const ProductFilters = () => {
  return (
    <div>
      <span> Filter Products</span>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio"
          name="group1"
         
        />
        <span className="ml-2">Ascending</span>
      </label>
      <label className=" ">
        <input
          type="radio"
          className="form-radio"
          name="accountType"
         
        />
        <span className="ml-2">Descending</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox" />
        <span className="ml-2">Include Out of stock</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox" />
        <span className="ml-2">Fast Delivery Only</span>
      </label>
      <button
        id="navAction"
        className="mx-auto lg:mx-0 hover:underline bg-blue-200 text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        clear
      </button>
    </div>
  );
};

export default ProductFilters;
