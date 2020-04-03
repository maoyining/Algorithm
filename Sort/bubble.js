//正宗的冒泡排序算法,并且经过了优化
//冒泡排序的思想就是不断地进行交换
//添加了一个flag来标记此趟排序是否进行交换
//如果此趟排序没有进行过交换，那么数列已经处于有序状态，不需要再进行排序
//时间复杂度最好是O(n),最坏是O(n²)
function bubbleSort(arr){
    let len=arr.length;
    for(let i=0;i<len-1;i++){ 
        let flag=false;
        for(j=len-2;j>=i;j--){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
                flag=true;
            }
        }
        if(flag==true){
            if(flag==false){
                break;
            }
        }
    }
}

//交换函数
function swap(arr,index1,index2){
    let temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}

//测试
let arr=[9,1,5,8,3,7,4,6,2];
bubbleSort1(arr);
console.log(arr)
