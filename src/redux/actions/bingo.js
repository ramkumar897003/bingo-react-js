import types from "../types";
import store from "../store";

import data from "../../data/index.json";
import { shuffle } from "../../helpers";

const { dispatch } = store;
const arr = [...shuffle(data)];

export function getData() {
  return new Promise((resolve) => {
    dispatch({
      type: types.GET_DATA,
      payload: arr,
    });

    return resolve(data);
  });
}

export function setData(payload) {
  return new Promise((resolve) => {
    dispatch({
      type: types.SET_DATA,
      payload,
    });

    return resolve(payload);
  });
}
