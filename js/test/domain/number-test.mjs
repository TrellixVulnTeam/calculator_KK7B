import {
    NumberBuilder
} from '../../src/domain/number.mjs';

describe('number builder', () => {
    it('produces a number given a digit', () => {
        let builder = NumberBuilder();
        builder.add(2);
        let number = builder.build();

        expect(number).toEqual(2);
    });

    it('produces a number given multiple digits', () => {
        let builder = NumberBuilder();
        builder.add(1);
        builder.add(9);
        builder.add(4);
        let number = builder.build();

        expect(number).toEqual(194);
    });
});