import { createContext } from "react";
import faker from "faker";

const ShoppingCart = createContext();

const Context = ({ children }) => {

    //here we are using faker.js (a javascript library for generating fake data)
    // https://www.npmjs.com/package/faker

    const products = [...Array(20)].map(() =>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.commerce.image(),
        inStock: faker.commerce.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),


    }));

    console.log(products);

    return <ShoppingCart.Provider>{children}</ShoppingCart.Provider>;
};

export default Context
