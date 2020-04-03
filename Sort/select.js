//简单选择排序,在排序时，找到合适的关键字再做交换
//比如说，对于应该排在第i位的数,对i-N的数进行一个查找，i以及i之后的最小的那个数，来讲第i个数和最小的数做交换
//时间复杂度是O(n²)，在性能上是略优于冒泡排序
function selectSort(arr){
    let len=arr.length;
    for(let i=0;i<len;i++){
        let min=arr[i];
        let index=i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<min){
                min=arr[j];
                index=j;
            }
        }
        if(index!=i){
            swap(arr,index,i);
        }
    }
}

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

let arr=[9,1,5,8,3,7,4,6,2];
selectSort(arr);
console.log(arr);