import { initializeTimes, updateTimes } from "./Main";

describe("Reducer functions", () => {
  test("initializeTimes should return correct initial values", () => {
    const result = initializeTimes();
    expect(result).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  test("updateTimes should return same state when no logic applied", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "UPDATE_DATE", date: "2025-09-09" };
    const result = updateTimes(state, action);
    expect(result).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});
