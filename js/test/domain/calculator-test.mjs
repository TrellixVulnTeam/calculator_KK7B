import {
    Calculator
} from '../../src/domain/calculator.mjs';

describe('Calculator', () => {
    it('displays the last number button pressed', () => {
        const calc = Calculator();
        calc.pressNumber(1);
        expect(calc.readDisplay()).toBe('1');
    });

    it('displays the last expression inputted', () => {
        const calc = Calculator();
        calc.pressNumber(2);
        calc.pressNumber(9);
        calc.pressAdd();
        calc.pressNumber(4);

        expect(calc.readDisplay()).toBe('29 + 4');
    });
});