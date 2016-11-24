//数组元素去重
function uniqueArr(array){
  let newArr = []; //一个新的临时数组
  //遍历当前数组
  for(let i = 0; i < array.length; i++){
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (newArr.indexOf(array[i]) === -1) newArr.push(array[i]);
  }
  return newArr;
}
export { uniqueArr }