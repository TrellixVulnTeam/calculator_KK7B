import {
    NumberBuilder
} from './number.mjs';

const Calculator = () => {
    let display = '';
    let a = 0;
    const builder = NumberBuilder();

    return {
        pressNumber: (n) => {
            display += n.toString();
            builder.add(n);
        },
        pressAdd: () => {
            display += ' + ';
            a = builder.build().value;
        },
        pressEquals: () => {
            display = (a + builder.build().value).toString();
        },
        readDisplay: () => {
            return display;
        }
    };
};

export {
    Calculator
};