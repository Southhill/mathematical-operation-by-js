/**
 * 数组元素去重
 * @param  {Array} arr 待去重的数组
 * @return {Array}     去重后的数组
 */
export function uniqueArr(arr){
  let newArr = []; //返回的结果数组
  let len = arr.length;
  //遍历当前数组
  for(let i = 0; i < len; i++){
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i]);
  }
  
    return newArr;
}
/**
 * 数组扁平化处理
 * @param  {Array} arr 待扁平化的数组
 * @return {Array}     处理后的数组
 */
export function steamroller(arr) {
    var resultArr = [];
    (function recArr(subArr) {
        subArr.forEach(function(v) {
            if (Array.isArray(v)) {
                recArr(v);
            } else {
                resultArr.push(v);
            }
        });
    })(arr);
    
    return resultArr;
}

// 最大公约数
export const gcd = (a, b) => !b ? a : gcd(b, a % b) 
// 最小公倍数
export const lcm = (a, b) => a / gcd(a, b) * b
