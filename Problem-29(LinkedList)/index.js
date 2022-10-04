var express = require('express');
var {ListNode,listFromArray,arrayFromList} = require('./listNode');
var app = express();

app.get('/rotate-linked-list',async(req,res) =>{
    var k = 10;
    var arr1 = [1,2,3,4,5];
    var head = listFromArray(arr1);

    res.status(200).json(rotateRight(head,k));
});

var rotateRight = function(head, k) {    
    if(head === null)
        return null;
    else if(k == 0 || head.next === null)
        return head;    
    else{
        var headNode = head;    
        var dummy = head;
        
        var lenghtList = 0;        
        while(head !== null && head.next !== null){
            lenghtList++;
            head = head.next;        
        }
    
        lenghtList++;
        var tail = head;
    
        if(k % lenghtList == 0)
            return dummy;
        else{
            var noRotations;
            if(k > lenghtList)
                noRotations = lenghtList - (k%lenghtList)-1;
            else
                noRotations = lenghtList-k-1;
    
            var counter = 0;
            while(counter < noRotations){
                dummy = dummy.next;
                counter++;
            }
            
            var kNode = dummy.next;
            dummy.next = null;
            tail.next = headNode;
                
            return kNode;
        }                    
    }
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});