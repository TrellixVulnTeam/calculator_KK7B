const Calculator = () => {
    let display = '';
    return {
        pressNumber: (n) => {
            display += n.toString();
        },
        pressAdd: () => {
            display += ' + ';
        },
        readDisplay: () => {
            return display;
        }
    };
};

export {
    Calculator
};