const input1 =document.getElementById("input1");
let timer =null
input1.addEventListener('keyup',function(){
  if(timer){
    clearTimeout(timer)
  }
  timer = setTimeout(()=>{
    console.log(input1.value);
    timer=null;
  },1000)
  
})  

//把上述防抖的防抖函数封装一下
//在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
function debounce(fn,delay=500){
  let timer=null;//timer在闭包中
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer=setTimeout(()=>{
      fn.apply(this,arguments)
      timer=null
    },delay)
  }
}

const input2 =document.getElementById("input2");
input2.addEventListener('keyup',debounce(function(){console.log(input2.value)},500))