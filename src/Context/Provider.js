// this switch is going to check the increment/decrement action depeding the user's action

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ProductAddToCart": 
                //this will return our current state which was already there 
                // and manipulate it, I had to 
                //1. destructuring the current state
                //2. Add what we are sending to the app        
            return {...state, cart:[...state.cart, { ...action.payload, quantity: 1}]};
        case "ProductRemoveFromCart": 
        // here I used filter for eact product which was already into the cart
        // and compare each element via Id
     
        return {...state, 
            cart: state.cart.filter((productInCart) => productInCart.id !== action.payload.id),
        };
        case "ChangeCartQuantity":
            return {...state,
                cart: state.cart.filter(cartChange=>
                    cartChange.id===action.payload.id ? (cartChange.quantity = action.payload.quantity) : cartChange.quantity)}
        default:
            return state;
    }
};
export const productProvider = (state, action) => {};