import { isEmpty } from "../check-if-empty.utils";

describe("isEmpty function", () => {
  it("Should return true if pass in null", () => {
    expect(isEmpty(null)).toBe(true);
  });
  it("Should return true if pass in undefined", () => {
    expect(isEmpty(undefined)).toBe(true);
  });
  it("Should return true if pass in empty object", () => {
    expect(isEmpty({})).toBe(true);
  });
  it("Should return true if pass in empty array", () => {
    expect(isEmpty([])).toBe(true);
  });
  it("Should return true if pass in empty string", () => {
    expect(isEmpty("")).toBe(true);
  });
  it("Should return false if pass in other values", () => {
    expect(isEmpty(4)).toBe(false);
    expect(isEmpty("test")).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ test: 1 })).toBe(false);
  });
});
