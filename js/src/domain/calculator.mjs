const Calculator = () => {
    let display = '';
    return {
        pressNumber: (n) => {
            display = n.toString();
        },
        display: () => {
            return display;
        }
    };
};

export {
    Calculator
};