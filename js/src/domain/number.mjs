const NumberBuilder = (() => {
    let digits = [];

    return {
        add: (digit) => {
            digits.push(digit);
        },
        build: () => {
            let number = 0;
            digits.reverse();
            while (digits.length > 0) {
                number += digits.pop(1);
                number *= 10;
            }
            return {
                value: number / 10
            };
        }
    };
});

export {
    NumberBuilder
};