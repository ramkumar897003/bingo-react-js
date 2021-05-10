import { shuffle } from "../helpers";
import data from "../data/index.json";

describe("shuffle function", () => {
  it("should return array of length 0", () => {
    expect(shuffle()).toHaveLength(0);
  });

  it("should return array of length 5", () => {
    expect(shuffle(data)).toHaveLength(5);
  });
});
