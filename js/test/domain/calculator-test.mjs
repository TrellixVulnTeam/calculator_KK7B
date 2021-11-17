import {
    Calculator
} from '../../src/domain/calculator.mjs';

describe('Calculator', () => {
    it('displays the last number button pressed', () => {
        const calc = Calculator();
        calc.pressNumber(1);
        expect(calc.display()).toBe('1');
    });
});