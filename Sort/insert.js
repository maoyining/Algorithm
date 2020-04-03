//直接插入排序
function insertSort(arr){
    let len=arr.length;
    if(len<=1){
        return;
    }
    for(let i=1;i<len;i++){
        let value=arr[i];//要进行插入操作的当前元素
        let index=i-1;//0到i-1是有序的
        while(index>=0 && arr[index]>value){
            arr[index+1]=arr[index]; //从后往前遍历寻找适合的位置，如果当前的值大于value，那么当前的值往后移动
            index--;
        }
        arr[index]=value;
    }
}

let arr=[9,1,5,8,3,7,4,6,2];
insertSort(arr);
console.log(arr);