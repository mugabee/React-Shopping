// this switch is going to check the increment/decrement action depeding the user's action

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ProductAddToCart": 
        return {...state,}
        default:
            return state;
    }
}