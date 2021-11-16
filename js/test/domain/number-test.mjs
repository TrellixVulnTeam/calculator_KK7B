import {
    NumberBuilder
} from '../../src/domain/number.mjs';

describe('number builder', () => {
    it('produces a number given a digit', () => {
        let builder = NumberBuilder();
        builder.add(2);
        let number = builder.build();

        expect(number).toEqual({
            value: 2
        });
    });
});