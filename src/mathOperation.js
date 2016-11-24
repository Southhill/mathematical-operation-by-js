import { uniqueArr } from './baseOperation.js'

// 数组的交集
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
//数组的并集