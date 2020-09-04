import { uniqueArr } from './baseOperation.js'
/**
 * 差集：两个数组的差集处理
 * @param  {Array} arr1 待处理的数组1
 * @param  {Array} arr2 待处理的数组2
 * @return {Array}      返回的结果数组
 */
export function diff(arr1, arr2) {
  //对arr1,arr2先进行去重处理。
  arr1 = uniqueArr(arr1)
  arr2 = uniqueArr(arr2)
  let newArr = [];
    for(let i = 0;i < arr1.length;){
        let ln = arr2.indexOf(arr1[i]);
        if(ln != -1){
            arr1.splice(i,1);
            arr2.splice(ln,1);
          }else{
            i++;
            }
      }
    newArr = arr1.concat(arr2);
  return newArr;
}
/**
 * 并集：两个数组的并集处理
 * @param  {Array} arr1 待处理的数组1
 * @param  {Array} arr2 待处理的数组2
 * @return {Array}      返回的结果数组
 */
export function union(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('args error, should be Array Type!');
    }
    for (let item of arr2) {
        if (arr1.indexOf(item) === -1) {
            arr1.push(item);
        }
    }
    return arr1;
}
/**
 * 交集：两个数组的交集处理，最终得到的数组无重复值。
 * @param  {Array} arr1 待处理的数组1
 * @param  {Array} arr2 待处理的数组2
 * @return {Array}      返回的结果数组
 */
 export function intersection(arr1, arr2) {
     if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
         throw new Error('args error, should be Array Type!');
     }
     let resultArr = [];
     for (let item of arr2) {
         if (arr1.indexOf(item) !== -1 && resultArr.indexOf(item) === -1) {
             resultArr.push(item);
         }
     }
     return resultArr;
 }
/**
 * 全排列：给定一个基本的数据类型。
 * 例：字符串，得到它的全排列，将结果存放到数组中返回。
 * @param  {String} str 传入的待排列的字符串参数
 * @return {Array}     字符串全排列后的结果数组
 */
export function permu(str) {
  var strArr = str.split('');
  var resultArr = [];
  var tempArr = [];
  // var len = str.length;
  (function rec(arr){
    if (arr.length === 1) {
      resultArr.push(tempArr.concat(arr).join(''));
      tempArr.pop();
    } else {
      var arr2 = arr.slice(0);
      var len2 = arr2.length;
      for (var i = 0;i <= len2; i++) {
        if (i < len2) {
          tempArr.push(arr2[i]);
          var arr3 = arr2.slice(0);
          arr3.splice(i, 1);
          rec(arr3);
        } else {
          tempArr.pop();
        }
      }
    }
  })(strArr);
  return resultArr;
}

/**
 * 创建一个项目为等差数列的数组
 * @param {Number} length 数组长度
 * @param {String} exp 等差数列的数学表达式，例如：3a+1
 * @returns {Array}
 */
export function createNumArray(length, exp = 'a+1') {
    if (typeof length !== 'number') throw new Error('length must be number type')

    const reg = /^(?<a>\d+)?\s?a\s?(?:\+\s?(?<b>\d+))?$/
    const expResult = exp.match(reg)

    if (expResult === null) throw new Error('argument:exp must be valid regexp, for example:3a+1')

    const { a = 1, b = 0 } = expResult.groups

    return Array.from(Array(length), (_, idx) => Number(a * idx) + Number(b))
}
