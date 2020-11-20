import {ceiling} from '../number.utils'

describe("ceiling function", () => {
  it('Should round up a number with decimal values', () => {
    expect(ceiling(3.554)).toBe(4);
  });
  it('Should return the same number if given a whole number', () => {
    expect(ceiling(3)).toBe(3);
  });
});
