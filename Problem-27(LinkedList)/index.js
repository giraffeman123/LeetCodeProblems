var express = require('express');
var {ListNode,listFromArray,arrayFromList} = require('./listNode');
var app = express();

app.get('/reverse-linked-list',async(req,res) =>{
    var arr1 = [1,2,3,4,5];
    var head = listFromArray(arr1);

    res.status(200).json(reverseLinkedList(head));
});

var reverseLinkedList = function(head) {            
    var prevNode = null;
    while(head !== null){
        var nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode;
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});