import operate from '../operate';

describe('if user presses AC key, calculate', () => {
  test("doesn't leave calculatorData unmutated", () => {
    expect(operate(5, 7, '+')).not.toEqual(8);
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(operate(5, 7, '-')).not.toEqual(2);
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(operate(5, 7, 'x')).not.toEqual(12);
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(operate(35, 7, '/')).not.toEqual(0.2);
  });
});