//传统的朴素方法去重
const arr = [1,2,3,1,1,2,2,4,6,8,8,9,9,9,9]
function removeDul(arr){
  const res=[]
  arr.forEach((element) => {
    if(res.indexOf(element)===-1){
      res.push(element)
    }
  });
  return res
}
const res = removeDul(arr)
console.log(res)

//使用set去重
const anotherArr = [1,2,3,1,1,2,2,4,6,8,8,9,9,9,9]
function removeBySet(arr){
  const set = new Set(arr)
  return [...set]
}
const res1 = removeBySet(anotherArr)
console.log(res1)