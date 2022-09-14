var express = require('express');
var {ListNode,listFromArray,arrayFromList} = require('./listNode');
var app = express();

app.get('/middleNode/:nodeToReturn', async(req,res) => {    
    var nodeToReturn = req.params.nodeToReturn;
    var arr1 = [1,2];     
    var head = listFromArray(arr1);

    res.status(200).json(middleNode(head,nodeToReturn));
});

app.get('/sort-linked-list',async(req,res) =>{
    var arr1 = [4,2,1,3];
    var head = listFromArray(arr1);

    res.status(200).json(sortList(head));
});

var sortList = function(head){
    if(head!==null)
        return recursive(head);
    else
        return null;
}

var recursive = function(head) {
    if(head.next===null)
        return head
            
    var list = divideInHalfList(head);
    var left = list.left;
    var right = list.right;        

    var leftOrdered = sortList(left);
    var rightOrdered = sortList(right);

    var mergeLists = mergeTwoLists(leftOrdered,rightOrdered);
    return mergeLists;
};

var mergeTwoLists = function(list1, list2) {
    var dummy = new ListNode();
    var mergeLists = new ListNode();
    dummy = mergeLists;

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            mergeLists.next = list1;
            mergeLists = mergeLists.next;
            list1 = list1.next;
        }else{
            mergeLists.next = list2;
            mergeLists = mergeLists.next;
            list2 = list2.next;
        }
    }

    if(list1) mergeLists.next = list1;
    if(list2) mergeLists.next = list2;

    return dummy.next;
}

var divideInHalfList = function(head) {    
    var tmp = new ListNode();                    
    tmp.next = head;
    
    var slow = head;    
    var fast = head;    
    var left = tmp;

    while(fast !== null && fast.next !== null){
        tmp = tmp.next;
        slow = slow.next;
        fast = fast.next.next;
    }

    tmp.next = null;

    return { "left" : left.next, "right" : slow };
};


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});