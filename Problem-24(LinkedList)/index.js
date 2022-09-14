var express = require('express');
var {ListNode,listFromArray,arrayFromList} = require('./listNode');
var app = express();

app.get('/find-middle-node/', async(req,res) => {    
    var arr1 = [1,2,3,4,5,6];     
    var head = listFromArray(arr1);

    res.status(200).json(middleNode(head));
});

var middleNode = function(head) {    
    var slow = head;
    var fast = head;
    var dummy = slow;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = null;

    return dummy;
};


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});