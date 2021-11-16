import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer } from "./Provider";
import { productProvider } from "./Provider";

const ShoppingCart = createContext();

const Context = ({ children }) => {

    //here we are using faker.js (a javascript library for generating fake data)
    // https://www.npmjs.com/package/faker

    const products = [...Array(20)].map(() =>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),


    }));

    // here instead of using value={{products}}, in order to access products into app
    // I used useReducer which is an alternative to useState

    //usereducer better compared to usestate, when it comes to complex state logic that involves multiple sub-values 
    //or when the next state depends on the previous one.

     const [state, dispatch] = useReducer(cartReducer, {
         products: products,
         cart:[]

     });

     const [productState, productDispatch] = useReducer(productProvider, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      });
    


    return <ShoppingCart.Provider value={{state, dispatch}}>{children}</ShoppingCart.Provider>;
};

export default Context

export const CartState = () => {
    return useContext(ShoppingCart);
};
