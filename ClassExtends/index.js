class Father { //Father实际上是一个函数，Father本身就指向构造函数
  constructor(name){ //构造方法，对应ES5里的构造函数,默认返回一个实例对象this
    this.name=name //实例属性都定义在this对象上
  }
  //注意定义类的方法的时候，前面不需要加上function关键字
  //实际上这个函数是定义在Father.prototype上的，
  //调用的时候其实就是在调用原型上的方法
  sayName(){ 
    console.log(`my name is ${this.name}`)  
  }
}

class Son extends Father{
  constructor(name,age){
    super(name)
    this.age=age
  }
  sayAge(){
    console.log(`my age is ${this.age}`)
  }
}

let child1 = new Son("MaoYining",18)
child1.sayName()
child1.sayAge()