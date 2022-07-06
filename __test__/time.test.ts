import getCurrentTime from "../utili/time";
import { renderHook } from '@testing-library/react-hooks'
import useCurrentTime from "../customHooks/useCurrentTime";

describe("should render time", () => {
  const time = new Date("11/12/2022");
  it("The year should be 2022", () => {
    const isYear = getCurrentTime(time);
    expect(isYear.year).toBe(2022);
  });

  it("test useCurrentTime custom hooks", () => {
    const { result } = renderHook(() => useCurrentTime(time));
    expect(result.current.year).toBe(2022);
  });
});
