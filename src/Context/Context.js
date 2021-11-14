import { createContext } from "react";

const ShoppingCart = createContext();

const Context = ({ children }) => {

    //here we are using faker.js (a javascript library for generating fake data)

    return <ShoppingCart.Provider>{children}</ShoppingCart.Provider>;
};

export default Context
