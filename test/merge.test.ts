import merge from "../src/merge";

describe("merge function", () => {
  test("correctly array merge", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 7, 5];
    const expected = [1, 2, 3, 4, 5, 5, 6, 7, 9];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  test("correctly array merge", () => {
    const collection_1 = [1, 2, 3, 4];
    const collection_2 = [0, 2, 4, 8, 9, 10];
    const collection_3 = [15, 13, 6, 1];
    const expected = [0, 1, 1, 2, 2, 3, 4, 4, 6, 8, 9, 10, 13, 15];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  test("correctly empty arrays merge", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const expected: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  test("correctly negative array merge", () => {
    const collection_1 = [-1, -2, 3, 4];
    const collection_2 = [-2, -4, 8, 9, 10];
    const collection_3 = [15, 13, -6, -1];
    const expected = [-6, -4, -2, -2, -1, -1, 3, 4, 8, 9, 10, 13, 15];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });
});
