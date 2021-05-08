import { combineReducers } from "redux";

import bingoReducer from "../reducers/bingo";

const rootReducer = combineReducers({
  bingo: bingoReducer,
});

export default rootReducer;
