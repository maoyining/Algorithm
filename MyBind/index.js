// /**
//  * 手写bind
//  */
// let obj={
//   "name":"阿毛",
//   "age":20
// }
// function fn(...args){
//   console.log(arguments);
//   console.log(args);
//   console.log(this.name)
// }

// Function.prototype.mybind=function(obj,...args){
//   return function(){
//     console.log(obj);
//     console.log(args);
//   }
// }
// let f=fn.mybind(obj,"a","b","c","d","e")
// f();
console.log(100);
setInterval(()=>{console.log(200)},2000);
console.log()