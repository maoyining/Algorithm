//获取当前页面的URL参数
console.log(location.search.substr(1))
/**
 * 方式一：通过传统方式location.search，来获取URL的查询参数
 * @param {*} name 
 */
function query1(name){
  const search = location.search.substr(1)//把第一个问号去掉
  const reg =new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
  const res=search.match(reg)
  if(res===null){
    return null
  }
  return res[2]

}
const q1=query1("c")
console.log(q1)

/**
 * 方式二：较为简单，利用新的 API URLsearchParams 
 * @param {*} name 
 */
function query2(name){
  const search = new URLSearchParams(location.search)
  return search.get(name)
}
const q2 = query2("a")
console.log(q2)

/**
 * 将url参数解析为js对象,用传统方法
 */
function paramToObj1(){
  const search = location.search.substr(1)
  const res={}  
  search.split('&').forEach(paramStr=>{
    const arr=paramStr.split("=")
    const key=arr[0]
    const value=arr[1]
    res[key]=value
  })
  return res
}
let obj1=paramToObj1()
console.log(obj1)

/**
 * 将URL参数解析为JS对象，用新的API URLSearchParams
 */
function paramToObj2(){
  const res={}
  const search=new URLSearchParams(location.search)
  search.forEach((val,key)=>{
    res[key]=val
  })
  return res
}
let obj2=paramToObj2()
console.log(obj2)
