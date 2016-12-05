import { uniqueArr } from './baseOperation.js'

// 交集：两个数组的交集处理
function diff(arr1, arr2) {
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
//并集：两个数组的并集处理

//全排列：给定一个基本的数据类型，例：字符串，得到它的全排列，将结果存放到数组中返回。
function permu(str) {
  var strArr = str.split('');
  var resultArr = [];
  var tempArr = [];
  var len = str.length;
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