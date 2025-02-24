/*
 * @Description:  除了先排序，也是利用对象进行标记处理的；
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-24 18:19:20
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-24 18:52:58
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
function FindNumsAppearOnce (array) {
  // write code here

  // 数组中元素要么出现一次，要么出现两次，可以先对元素进行排序 Math.sort((a,b)=>a-b) 从小到大  有点偷懒的样子


  array=quickSort(array, 0, array.length - 1);

 
  // 此时的 数组已经进过排序


  let result=[]
  // 出现一次的元素，在中间
  for(let index=1;index<array.length-1;index++){
    
    if(array[index-1]!==array[index]&&array[index]!==array[index+1]){
       result.push(array[index])
    }

  }

  // 假设在开头
  if(array[0]!==array[1]){
    result.push(array[0])
  }

  // 假设在结尾

  if(array[array.length-1]!==array[array.length-2]){
    result.push(array[array.length-1])
  }

  // 过滤掉只出现一次的元素， 进行排序从小到大；
  return result.sort((a,b)=>a-b)

}



function quickSort (arr, left, right) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    // 左侧
    quickSort(arr, left, pivot - 1)

    // 右侧
    quickSort(arr, pivot + 1, right)
  }


  return arr;
}

function partition (arr, left, right) {


  let pivot = arr[left];
  while (left < right) {

    while (left < right && pivot <= arr[right]) --right;
    arr[left] = arr[right];

    while (left < right && pivot >= arr[left]) ++left;
    arr[right] = arr[left]
  }

  arr[left] = pivot;

  return left



}

console.log(FindNumsAppearOnce([1, 4, 1, 6, 7]))

module.exports = {
  FindNumsAppearOnce: FindNumsAppearOnce
};