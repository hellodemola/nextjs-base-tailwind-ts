import getCurrentTime from "../utili/time";
import { renderHook } from "@testing-library/react-hooks";
import useCurrentTime from "../customHooks/useCurrentTime";

describe("should render time", () => {
  const time = new Date("10/12/2023");
  it("Time returns the current time", () => {
    const isYear = getCurrentTime(time);
    expect(isYear.year).toBe(2023);
    expect(isYear.month).toBe(10);
    expect(isYear.day).toBe(12);
  });

  it("UseCurrentTime should render current time", () => {
    const currentDate = new Date();
    const [current_year, current_month, current_day, current_hour] = [currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours()];

    const { result } = renderHook(() => useCurrentTime(time));
    expect(result.current.year).toBe(current_year);
    expect(result.current.month).toBe(current_month);
    expect(result.current.day).toBe(current_day);
    expect(result.current.hour).toBe(current_hour);
  });

  it("test useCurrentTime custom hooks", () => {
    const { result } = renderHook(() => useCurrentTime(time));
    expect(result.current.year).toBe(2022);
  });
});
