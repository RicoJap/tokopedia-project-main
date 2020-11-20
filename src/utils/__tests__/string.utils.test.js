import { toTitleCase } from "../string.utils";

describe("toTitleCase function", () => {
  it("Should make an all lowercase word to title case", () => {
    expect(toTitleCase("test")).toBe("Test");
  });
  it("Should make an all uppercase word to title case", () => {
    expect(toTitleCase("TEST")).toBe("Test");
  });
});
