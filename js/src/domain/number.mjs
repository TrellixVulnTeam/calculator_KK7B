const NumberBuilder = (() => {
    let digits = [];

    const builder = {
        add: (digit) => {
            digits.push(digit);
        },
        build: () => {
            let number = 0;
            digits.reverse();
            while (digits.length > 0) {
                number += digits.pop();
                number *= 10;
            }
            return number / 10;
        },
        buildNegative: () => {
            return -builder.build();
        },
    };
    return builder;
});

export {
    NumberBuilder
};