//单链表的各种操作
class Node{
    constructor(value){
        this.data=value;
    }
}
class LinkList{
    constructor(){
        this.head=new Node("head");
        this.next=null;
        this.length=1;
    }
    //按值查找节点值为value的节点位置，返回节点
    findByValue(value){
        let cur=this.head;
        while(cur!=null && value!=cur.data){
            cur=cur.next;
        }
        if(cur==null){
            console.log("ERROR: sorry,we don't have such node named "+value);
            return -1;
        }
        return cur;
    }

    //通过index查找链表中的节点
    findByIndex(index){
        let c=0;
        let cur=this.head;
        while(c<index && cur!=null){
            cur=cur.next;
            c++;
        }
        if(cur==null){
            console.log("ERROR:sorry, "+index+" is not a correct index");
            return -1;
        }
        return cur;
    }
    

    //在第一个节点值value的后面插入数据data
    insert(value,data){
        let cur= this.findByValue(value)
        if(cur==-1){
            return;
        }
        this.length++;
        let newNode=new Node(data);
        newNode.next=cur.next;
        cur.next=newNode;
    }

    //删除第index个节点
    delByOrder(index){
        if(index==0){
            this.head=cur.next;
            return;
        }
        let cur = this.findByIndex(index)
        if(cur==-1){
            return;
        }
        let pre = this.findByIndex(index-1);
        pre.next=cur.next;
    }

    //顺序打印链表的所有数据
    print(){
        let cur=this.head;
        while(cur!=null){
            console.log(cur.data);
            cur=cur.next;
        }
    }

    //从尾到头打印打印链表但不改变链表结构
    //使用栈
    //缺点：代码不够简洁。
    //优点：鲁棒性好（在不确定的情况下，程序仍然可以正确的执行）。
    printBackStack(){
        let stack=[]
        let cur=this.head;
        while(cur!=null){
            stack.push(cur.data);
            cur=cur.next;
        }
        while(stack.length!=0){
            console.log(stack.pop());
        }
    }

}

//从头到尾打印链表但不改变代码结构
//使用递归
//缺点：如果链表很长，递归深度很深，导致堆栈溢出。
//优点：代码简洁、明了。
function printBackRecursive(node){
    if(node!=null){  
        printBackRecursive(node.next);
        console.log(node.data);   
    }else{
        return;
    }
}

//测试部分
let list=new LinkList()
//往链表内插入五个随机值
for(let i=0;i<5;i++){
    let value=Math.floor(Math.random()*5)
    list.insert("head",value);
}
list.print();
//list.delByOrder(6);
//list.print();
console.log("---------------")
//list.printBackStack();
printBackRecursive(list.head);
