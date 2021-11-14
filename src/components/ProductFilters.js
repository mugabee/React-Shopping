const ProductFilters = () => {
  return (
    <div>
      <span> Filter Products</span>
      <label class="inline-flex items-center">
        <input
          type="radio"
          class="form-radio"
          name="group1"
         
        />
        <span class="ml-2">Ascending</span>
      </label>
      <label class="inline-flex items-center">
        <input
          type="radio"
          class="form-radio"
          name="accountType"
         
        />
        <span class="ml-2">Descending</span>
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="form-checkbox" />
        <span class="ml-2">Include Out of stock</span>
      </label>
      <label class="flex items-center">
        <input type="checkbox" class="form-checkbox" />
        <span class="ml-2">Fast Delivery Only</span>
      </label>
      <button
        id="navAction"
        class="mx-auto lg:mx-0 hover:underline bg-blue-200 text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        clear
      </button>
    </div>
  );
};

export default ProductFilters;
