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
                number += digits.pop();
                number *= 10;
            }
            return number / 10;
        }
    };
});

export {
    NumberBuilder
};