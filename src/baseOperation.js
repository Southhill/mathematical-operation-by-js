/*
数组元素去重
 */
export function uniqueArr(arr){
  let newArr = []; //一个新的临时数组
  let len = arr.length;
  //遍历当前数组
  for(let i = 0; i < len; i++){
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i]);
  }
  return newArr;
}
/*
数组扁平化处理
 */
export function steamroller(arr){

}