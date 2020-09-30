import { expect } from 'chai'

import { uniqueArr, steamroller } from '../src/baseOperation.js';
import { diff, union, permutation, intersection } from '../src/mathOperation.js';

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

    describe('mathOperation test', () => {
        it('差集处理', () => {
            let arr1 = [23, 'he', 'wu', 10000];
            let arr2 = ['he', 233, 10000, 'start'];
            let resultArr = diff(arr1, arr2);
            expect(resultArr).to.eql([23, 'wu', 233, 'start']);
        })

        it('并集处理', () => {
            let arr1 = [23, 'he', 'wu', 10000];
            let arr2 = ['he', 233, 10000, 'start'];
            let resultArr = union(arr1, arr2);
            expect(resultArr).to.eql([23, 'he', 'wu', 10000, 233, 'start']);
        })

        it('交集处理', () => {
            let arr1 = [23, 'he', 'wu', 10000];
            let arr2 = ['he', 233, 10000, 'start', 'he'];
            let resultArr = intersection(arr1, arr2);
            expect(resultArr).to.eql(['he', 10000]);
        })

        it('全排列', () => {
            let resultArr = permutation('heo');
            expect(resultArr.length).to.equal(6);
            expect(resultArr).to.eql(['heo', 'hoe', 'eho', 'eoh', 'ohe', 'oeh']);
        })
    })
})
