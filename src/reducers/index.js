import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import favoriteReducer from "./favoriteReducer";
import goodsReducer from "./goodsReducer";
import purchasedReducer from "./purchasedReducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer,
    liked: favoriteReducer,
    purchased: purchasedReducer,
});

export default rootReducer;
