import getCurrentTime from "../utils/time";
import { renderHook } from "@testing-library/react-hooks";
import useCurrentTime from "../customHooks/useCurrentTime";

describe("should render time", () => {
  const currentDate = new Date();

  it("UseCurrentTime should render current time", () => {
    const [
      current_year,
      current_month,
      current_day,
      current_hour,
      current_minutes,
      ] = [
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes(),
    ];

    const { result } = renderHook(() => useCurrentTime(currentDate));
    expect(result.current.year).toBe(current_year);
    expect(result.current.month).toBe(current_month);
    expect(result.current.day).toBe(current_day);
    expect(result.current.hour).toBe(current_hour);
    expect(result.current.minutes).toBe(current_minutes);
  });

})
