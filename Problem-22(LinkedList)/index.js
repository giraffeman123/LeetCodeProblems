var express = require('express');
var {ListNode,listFromArray,arrayFromList} = require('./listNode');
var app = express();

app.get('/removeNthNode/:n', async(req,res) => {
    var n = req.params.n;    
    var arr = [1,2,3,4,5];
    var head = listFromArray(arr);
       
    res.status(200).json(removeNthFromEnd(head,n));
});

var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode();
    dummy.next = head;
    var left = dummy; var right = dummy;

    while(n>0){
        right = right.next;
        n--;
    }

    while(right.next!==null){
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;
    return dummy.next;
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});