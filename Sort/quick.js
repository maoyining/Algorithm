//快速排序
// 先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
// 左右分别用一个空数组去存储比较后的数据。
// 最后递归执行上述操作，直到数组长度 <= 1;

//方法一:
function quickSort(arr){
    //递归终止的条件
    if(arr.length<=1){
        return arr;
    }

    let midIndex=Math.floor(arr.length/2)
    let midValue=arr[midIndex];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        if(i!=midIndex){ //这个判断条件不可少,少了栈会溢出
            if(arr[i]<midValue){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
    }
    return quickSort(left).concat(midValue, quickSort(right));
}

let arr=[4,3,6,5,7,0,9];
let res=quickSort(arr);
console.log(res)

//方法二:应该还有优化