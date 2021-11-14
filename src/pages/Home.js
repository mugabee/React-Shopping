import ProductDisplay from "../components/ProductDisplay";
import { CartState } from "../Context/Context";

const Home = () => {
    const { 
        //here I am destructring by selecting only products
        state: { products },
    } = CartState();

    console.log(products)
    return <div>  
        <div className="grid grid-cols-4 gap-4">
            {products.map((product) => {
               return <ProductDisplay product={product} key={product.id}/>
            })}
        </div>
    </div>
    
}

export default Home
