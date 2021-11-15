// this switch is going to check the increment/decrement action depeding the user's action

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ProductAddToCart": 
        //this will return our current state which was already there 
        // and manipulate it, I had to 
        //1. destructuring the current state
        //2. Add what we are sending to the app
        
        return {...state, cart:[...state.cart, { ...action.payload, quantity:1}]}
        default:
            return state;
    }
}