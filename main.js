//冻结了这个obj,但并没有彻底冻结
const obj=Object.freeze({
    name:"maoyining",
    age:21,
    info:{
        home:"hangzhou",
        gender:"female"
    }
});
obj.prop="yiyy"
obj.info.home="tonglu"
console.log(obj)
//所以接下来要彻底冻结它
function myFreeze(obj){
    Object.freeze(obj);
    Object.keys(obj).forEach((key,index)=>{
        if(typeof obj[key]==='object')
            myFreeze(obj[key]); //递归
    })
}
myFreeze(obj);
obj.info.home="hangzhou";
console.log(obj);


