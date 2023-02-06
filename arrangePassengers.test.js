const { arrangePassengers } = require("./index");
describe("arrangePassengers", () => {
  it("it should return 2 blocks of 3x2 and 4x2", () => {
    const input = [
      [3, 2],
      [4, 2],
    ];
    const passengers = 12;
    const expected = [
      [1, 3, 5, 7, 9, 11],
      [2, 4, 6, 8, 10, 12],
    ];
    expect(arrangePassengers(input, passengers)).toEqual(expected);
  });

  it("it should return 3 blocks of 3x2, 4x2 and 3x2", () => {
    const input = [
      [3, 2],
      [4, 2],
      [3, 2],
    ];
    const passengers = 18;
    const expected = [
      [1, 5, 9, 11, 13, 16],
      [2, 3, 6, 7, 14, 17],
      [4, 8, 10, 12, 15, 18],
    ];
    expect(arrangePassengers(input, passengers)).toEqual(expected);
  });

  it("it should return an empty array if the number of passengers is 0", () => {
    const input = [
      [3, 2],
      [4, 2],
      [3, 2],
    ];
    const passengers = 0;
    const expected = [[], [], []];
    expect(arrangePassengers(input, passengers)).toEqual(expected);
  });
});
