let obj1 = {
  a: {
    b: "bbb",
    c: "ccc"
  },
  d: {
    e: "eee",
    f: {
      g: "ggg"
    }
  }
}
let obj2 = {
  a: {
    b: "bbb",
    c: "ccc"
  },
  d: {
    e: "eee",
    f: {
      g: "ggg"
    }
  }
}
console.log(obj1 === obj2)

function isObject(obj) {
  return typeof obj === 'object' && obj != null
}

/**
 * @param {Object} obj1 
 * @param {Object} obj2 
 * 1.如果传入的两个对象其中一个是原始类型，那可以直接比较是否相等
 * 2.如果传入的两个对象是同一个对象，直接return true
 * 3.for 循环遍历obj1的所有属性，利用递归的方式依次比较是否和obj2相等
 */
function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  if(obj1===obj2){
    return true
  }
  let objKey1=Object.keys(obj1)
  let objKey2=Object.keys(obj2)
  if(objKey1.length!==objKey2.length){
    return false
  }
  for(let key in obj1){
    let res= isEqual(obj1[key],obj2[key])
    if(!res){
      return false
    }
  }
  return true

}
console.log(isEqual(obj1,obj2))