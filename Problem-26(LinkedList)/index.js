var express = require('express');
var {ListNode,listFromArray,arrayFromList} = require('./listNode');
var app = express();

app.get('/delete-duplicates',async(req,res) =>{
    var arr1 = [1,1,1];
    var head = listFromArray(arr1);

    res.status(200).json(deleteDuplicates(head));
});

var deleteDuplicates = function(head) {            
    if(head === null)
        return null;
    else{        
        var dummy = head;          
        while(head !== null){                    
            while(head.next !== null && head.val === head.next.val){
                head.next = head.next.next;               
            }                
            head = head.next;                                 
        }

        return dummy;
    }
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});