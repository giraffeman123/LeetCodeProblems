var express = require('express');
var {ListNode,listFromArray,arrayFromList} = require('./listNode');
var app = express();

app.get('/mergeTwoSortLists/', async(req,res) => {    
    var arr1 = [1,2,4]; 
    var arr2 = [1,3,4];

    var list1 = listFromArray(arr1);
    var list2 = listFromArray(arr2);
       
    res.status(200).json(mergeTwoLists(list1,list2));
});

var mergeTwoLists = function(list1, list2) {
    var dummy = new ListNode();    
    var mergeLists = new ListNode();
    dummy = mergeLists;
    
    while(list1 && list2){              
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
};


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});