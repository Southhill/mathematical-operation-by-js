import { expect } from 'chai'

import { uniqueArr, steamroller } from '../src/baseOperation.js';

describe('Array test', () => {
    describe('baseOperation test', () => {
        it('数组元素去重', () => {
            let arr = [2, 2, 3, 5, 5, 7, 3, 10];
            let resultArr = uniqueArr(arr);
            expect(resultArr).to.eql([2, 3, 5, 7, 10]);
            expect(resultArr.length).to.equal(5);
        })

        it('扁平化处理数组', () => {
            let arr = [233, [2, 33], ['he', ['hello', 'world']]];
            let resultArr = steamroller(arr);
            expect(resultArr).to.eql([233, 2, 33, 'he', 'hello', 'world']);
        })
    })
})
