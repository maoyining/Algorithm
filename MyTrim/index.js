//手写字符串trim保证浏览器兼容性
String.prototype.trim = function (){
  return this.replace(/^\s+/,'').replace(/\s+$/,'')
}