//顺序打印链表的所有数据
function inOrder(head){
    let cur=head;
    while(cur!=null){
        console.log(cur.data);
        cur=cur.next;
    }
}


//从尾到头打印链表但不改变代码结构
//使用递归
//缺点：如果链表很长，递归深度很深，导致堆栈溢出。
//优点：代码简洁、明了。
function fromBackRecursive(node){
    if(node!=null){  
        fromBackRecursive(node.next);
        console.log(node.data);   
    }else{
        return;
    }
}

//从尾到头打印打印链表但不改变链表结构
//使用栈
//缺点：代码不够简洁。
//优点：鲁棒性好（在不确定的情况下，程序仍然可以正确的执行）。
function fromBackStack(head){
    let stack=[]
    let cur=head;
    while(cur!=null){
        stack.push(cur.data);
        cur=cur.next;
    }
    while(stack.length!=0){
        console.log(stack.pop());
    }
}

module.exports={
    fromBackRecursive,
    inOrder,
    fromBackStack
}