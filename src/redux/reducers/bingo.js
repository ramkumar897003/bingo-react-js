import types from "../types";

let initialState = {
  data: [],
};

const bingoReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case types.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default bingoReducer;
