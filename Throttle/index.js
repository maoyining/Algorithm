let div1 = document.getElementById("div1")
let timer=null;
div1.addEventListener('drag',function(e){
  if(timer){
    return
  }
  timer=setTimeout(() => {
    console.log(e.offsetX,e.offsetY)
    timer=null
  }, 1000);
  
})

//给这个节流函数封装一下
//规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
function throttle(fn,delay){
  let timer=null;
  return function(){
    if(timer){
      return;
    }
    timer=setTimeout(()=>{
      fn.apply(this,arguments);
      timer=null;
    },delay)
  }
}
let div2 = document.getElementById("div2")
div2.addEventListener('drag',throttle((e)=>{console.log(e.offsetX,e.offsetY)},500))