const ProductFilters = () => {
  return (
    <div>
      <span> Filter Products</span>
      <label class="inline-flex items-center">
        <input
          type="radio"
          class="form-radio"
          name="accountType"
          value="personal"
        />
        <span class="ml-2">Ascending</span>
      </label>
      <label class="inline-flex items-center">
        <input
          type="radio"
          class="form-radio"
          name="accountType"
          value="personal"
        />
        <span class="ml-2">Descending</span>
      </label>
    </div>
  );
};

export default ProductFilters;
