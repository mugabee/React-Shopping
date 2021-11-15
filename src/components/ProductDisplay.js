import Rating from "./Rating";

const ProductDisplay = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <span>{product.price.split(".")[0]} RWF</span>
      <span>
        {product.fastDelivery ? (
          <div> Fast Delivery</div>
        ) : (
          <div>1 Week Delivery</div>
        )}
      </span>
      <div className="py-1 text-xl mx-10 grid grid-flow-col auto-cols-max ">
        <Rating rating={product.rating} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">Add to cart</button>
    </div>
  );
};

export default ProductDisplay;
