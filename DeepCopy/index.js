/**
 * 手写深拷贝
 */
let obj={
  a:{
    b:{
      c:{
        d:"dddd"
      }
    },
    h:"hhhh"
  }
}

/**
 * 
 * @param {Object} obj 
 * 1.首先对传入参数进行校验，如果传入的值时基本数据类型那就直接return obj就可以了
 * 2.初始化返回结果target,判断是数组还是对象
 * 3.利用递归进行深拷贝，还要注意hasOwnProperty的细节
 */
function DeepCopy(obj){
  if(obj == null||typeof obj !=="object"){ 
    return obj;
  }

  let target;
  if(obj instanceof Array){
    target = [];
  }else{
    target={};
  }

  for(let key in obj){
    if( obj.hasOwnProperty(key)){ //保证key不是原型的属性
      target[key]=DeepCopy(obj[key])
    }
  }
  return target;

}
let target=DeepCopy(obj);
target.a.b.c.d="yyyyy";
console.log(obj.a.b.c.d);
console.log(target.a.b.c.d);


