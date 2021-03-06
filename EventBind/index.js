let root=document.getElementById("app")

/**
 * 集绑定元素与代理于一体的绑定函数
 * @param {*} element  要绑定事件的元素
 * @param {*} type     绑定的事件类型
 * @param {*} selector 要筛选的触发元素的选择器
 * @param {*} fn       触发事件之后要执行的回调函数
 */
function bindEvent(element,type,selector,fn){
  if(fn==null){//处理传三个参数的情况
    fn=selector;
    selector=null;
  }
  element.addEventListener(type,event=>{
    let target=event.target;//触发事件的元素对象
    if(selector){ //代理绑定
      if(target.matches(selector)){
        fn.call(target,event); //让fn在target环境下执行,实质就是把this指向了触发了事件的元素
      }
    }else{ //普通绑定
      fn.call(target,event)
    }
  })
}

/**
 * test
 */
let item=document.getElementsByTagName("li");
bindEvent(item[0],"click","li",function(event){
  console.log(event.target);
  console.log(this)
})

function bb(element,type,fn){
  element.addEventListener(type,fn);
}
bb(item[1],"click",function(event){
  console.log(this)
})