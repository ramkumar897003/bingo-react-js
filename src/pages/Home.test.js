import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Home from "./Home";
import data from "../data/index.json";
import { shuffle } from "../helpers";

const mockStore = configureStore([]);

const cards = shuffle(data);

describe("Home Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      bingo: {
        data: [...cards],
      },
    });
  });
  test("renders card components", () => {
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const cards = queryAllByTestId("card");
    expect(cards).toHaveLength(25);
  });
});
