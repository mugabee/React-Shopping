// this switch is going to check the increment/decrement action depeding the user's action

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ProductAddToCart": 
        //this will return our current state which was already there 
        // and manipulate it
        
        return {...state,}
        default:
            return state;
    }
}