
const xhr = new XMLHttpRequest()
xhr.open('GET', '/data/test.json', true)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText)) //注意细节
    } else {
      console.log("其他情况")
    }
  }
}
xhr.send(null)

/**
 * post的情况,注意post的内容要传字符串
 */
// const postData={
//   username:"myn",
//   password:"123456"
// }
// xhr.send(JSON.stringify(postData))

/**
 * 
 * @param {String} url 把Promise结合进来
 */
function ajax(url) {
  return (
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject(new Error("something wrong"))
          }
        }
      }
      xhr.send(null);
    })
  )
}

ajax("/data/test.json").then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})