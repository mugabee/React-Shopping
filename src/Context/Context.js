import { createContext } from "react";

const ShoppingCart = createContext();

const Context = () => {
    return (
        <ShoppingCart.Provider>
            
        </ShoppingCart.Provider>
    )
}

export default Context
