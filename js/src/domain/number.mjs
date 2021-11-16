const NumberBuilder = (() => {
    let digits = [];

    return {
        add: (digit) => {
            digits.push(digit);
        },
        build: () => {
            return {
                value: 2
            };
        }
    };
});

export {
    NumberBuilder
};