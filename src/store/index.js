import { createStore, combineReducers, applyMiddleware } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import BreadReducer from "./reducers/breads.reducer";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";
import OrderRducer from "./reducers/order.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer,
    orders: OrderRducer

})

export default createStore(RootReducer,applyMiddleware(thunk));
