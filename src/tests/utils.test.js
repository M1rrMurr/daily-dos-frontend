import { test, expect } from "vitest";
import { getDayNum } from "@/utils/dateDayNum";
test("return the day number of the week 1-7", () => {
  expect(getDayNum("2026.05.02")).toBe(6);
  expect(getDayNum("2026.05.03")).toBe(7);
  expect(getDayNum(new Date("2026.05.03"))).toBe(7);
  expect(getDayNum("2026.05.04")).toBe(1);
});
