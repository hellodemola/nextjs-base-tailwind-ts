import getCurrentTime from "../utili/time";

describe("should render time", () => {
  const time = new Date("11/12/2022");
  it("The year should be 2022", () => {
    const isYear = getCurrentTime(time);
    expect(isYear.year).toBe(2022);
  });
});
