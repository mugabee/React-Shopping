const ProductDisplay = ({product}) => {
    return <div>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
    </div>;   
};

export default ProductDisplay;
