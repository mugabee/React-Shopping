import { CartState } from "../Context/Context";

const Home = () => {
    const { state } = CartState();
    console.log(state)
    return <div>  Home Connected </div>
    
}

export default Home
