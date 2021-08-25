import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import chocolateReducer from "./chocolate/chocolateReducer";
import reducer from "./user/userReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  chocolate: chocolateReducer,
  user: reducer,
});

export default rootReducer;
