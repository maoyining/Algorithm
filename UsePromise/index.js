function loadImg(src){
  return new Promise((resolve,reject)=>{
    const img=document.createElement("img");
    img.onload=()=>{
      console.log("图片已加载完成")
      resolve(img)
    }
    img.onerror=()=>{
      reject(new Error(`加载失败 ${src}`))
    }
    img.src=src
  })
}

let url1="http://img3.imgtn.bdimg.com/it/u=2213622192,357481407&fm=26&gp=0.jpg"
let url2="http://img5.imgtn.bdimg.com/it/u=3431885399,3957805186&fm=26&gp=0.jpg"
let root=document.getElementsByTagName("body")[0];
loadImg(url1).then((img)=>{
  console.log(img)
  root.appendChild(img);
  return loadImg(url2)
}).then(img=>{
  console.log(img)
  root.appendChild(img);
}).catch(err=>{
  console.log(err)
})