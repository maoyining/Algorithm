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
        fn.call(target,event);
      }
    }else{ //普通绑定
      fn.call(target,event)
    }
  })
}

let item=document.getElementsByTagName("li");
bindEvent(item[0],"click","li",(event)=>{
  console.log(event.target);
})