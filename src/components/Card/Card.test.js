import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Card from "../Card";

const mockStore = configureStore([]);

describe("Card Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      bingo: {
        data: [],
      },
    });
  });
  test("renders data", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Card
          child={{
            id: 1,
            title: "(child noices in the background)",
          }}
        />
      </Provider>
    );

    expect(getByText(/(child noices in the background)/i)).toBeInTheDocument();
  });
});
