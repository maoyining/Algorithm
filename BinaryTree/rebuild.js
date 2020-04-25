class TreeNode{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

function rebuildBinaryTree(preOrder,inOrder){
    if(preOrder.length==0||inOrder.length==0){
        return;
    }
    let root=new TreeNode(preOrder[0]);
    for(let i=0;i<preOrder.length;i++){
    
    }
}

let preOrder=[1,2,4,7,3,5,6,8];
let inOrder=[4,7,2,1,5,3,8,6];