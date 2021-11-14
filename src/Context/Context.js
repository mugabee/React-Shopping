import { createContext } from "react";

const ShoppingCart = createContext();

const Context = ({ children }) => {
    return <ShoppingCart.Provider>{children}</ShoppingCart.Provider>;
};

export default Context
