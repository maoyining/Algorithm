//数组拍平
const arr =[[1,2],3,[4,5,[6,7,[8,9,[10,11,[12]]]]]]
//Array.prototype.concat.apply([],arr)
//apply方法会调用一个函数，apply方法的第一个参数会作为被调用函数的this值，apply方法的第二个参数（一个数组，或类数组的对象）会作为被调用对象的arguments值，
//也就是说该数组的各个元素将会依次成为被调用函数的各个参数；将该特性应用到代码中：
function flatArr(arr){
  const isDeep = arr.some((item)=>{return item instanceof Array})
  if(!isDeep){ //递归截止的条件
    return arr
  }
  const res=Array.prototype.concat.apply([],arr)
  return flatArr(res) //递归
}
const res =flatArr(arr)
console.log(res)