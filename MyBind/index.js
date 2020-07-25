let obj = {
  name:"maoyining"
}

function hello(word){
  console.log(this.name+word)
}

//手写call
//明确思路：把函数赋给要绑定的对象的一个属性上，然后在执行函数传入参数，最后delete这个属性
Function.prototype.myCall = function(obj,...args){
  obj.func = this
  obj.func(args)
  delete obj.func
}

hello.myCall(obj,",你好呀")

//手写apply
Function.prototype.myBind = function(obj,arr){
  obj.func = this
  obj.func(arr)
  delete obj.func
}
hello.myCall(obj,",wuwuwu")

//手写bind
Function.prototype.myBind = function(obj,...bindArgs){
  obj.func = this
  return (...args)=>{ return obj.func(bindArgs,args) }
}

let f = hello.myBind(obj,",yyy")
f()