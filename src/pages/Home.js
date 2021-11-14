import { CartState } from "../Context/Context";

const Home = () => {
    const { 
        //here I am destructring by selecting only products
        state: { products },
    } = CartState();

    console.log(state)
    return <div>  
        <div>
            {products.map((product) => {
               return <span>{product.name}</span>;
            })}
        </div>
    </div>
    
}

export default Home
