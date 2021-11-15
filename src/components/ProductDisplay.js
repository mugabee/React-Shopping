const ProductDisplay = ({product}) => {
    return <div>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <span>{product.price.split(".")[0]} RWF</span>
    </div>;   
};

export default ProductDisplay;
