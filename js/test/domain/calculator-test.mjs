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

    it('displays result when equals pressed', () => {
        const calc = Calculator();
        calc.pressNumber(6);
        calc.pressNumber(7);
        calc.pressAdd();
        calc.pressNumber(1);
        calc.pressEquals();

        expect(calc.readDisplay()).toBe('68');
    });

    it('subtracts two numbers', () => {
        const calc = Calculator();
        calc.pressNumber(9);
        calc.pressNumber(8);
        calc.pressSubtract();
        calc.pressNumber(1);
        calc.pressNumber(0);
        calc.pressEquals();

        expect(calc.readDisplay()).toBe('88');
    });

    it('displays subtraction symbol', () => {
        const calc = Calculator();
        calc.pressSubtract();

        expect(calc.readDisplay()).toBe(' - ');
    });
});