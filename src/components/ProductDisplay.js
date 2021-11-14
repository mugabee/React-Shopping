const ProductDisplay = ({product}) => {
    return <div className="grid grid-cols-3 gap-4"><div>{product.name}</div></div>;   
};

export default ProductDisplay;
