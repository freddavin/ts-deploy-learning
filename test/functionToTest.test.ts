import { functionToTest } from '../src/functionToTest';

describe('UNIT TEST - Function To Test', () => {
  it('when has number, then should return true', () => {
    const input = 1;

    const result = functionToTest(input);

    expect(result).toBeTruthy();
  });

  it('when has not a number, then should return false', () => {
    const result = functionToTest();

    expect(result).toBeFalsy();
  });
});
