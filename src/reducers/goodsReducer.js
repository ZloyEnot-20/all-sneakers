function goodsReducer(state = [], action) {
    switch (action.type) {
        case "ADD":
            return [...state, { ...action.payload }];

        case "REMOVE":
            return [...state.filter((item) => item.id !== action.payload.id)];

        default:
            return state;
    }
}

export default goodsReducer;
