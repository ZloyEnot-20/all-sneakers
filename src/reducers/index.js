import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import favoriteReducer from "./favoriteReducer";
import goodsReducer from "./goodsReducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer,
    liked: favoriteReducer,
});

export default rootReducer;
