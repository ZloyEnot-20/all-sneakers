function purchasedReducer(state = [], action) {
    switch (action.type) {
        case "ADD_PURCHASED":
            return [...state, ...action.payload];

        default:
            return state;
    }
}

export default purchasedReducer;
