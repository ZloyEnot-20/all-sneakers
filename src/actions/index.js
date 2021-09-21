export const addToCart = (action) => {
    return {
        type: "ADD_TO_CART",
        payload: action,
    };
};
export const removeFromCart = (action) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: action,
    };
};
export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    };
};
export const addFavorite = (action) => {
    return {
        type: "ADD_FAVORITE",
        payload: action,
    };
};
export const removeFavorite = (action) => {
    return {
        type: "REMOVE_FAVORITE",
        payload: action,
    };
};
export const addPurchased = (action) => {
    return {
        type: "ADD_PURCHASED",
        payload: action,
    };
};
