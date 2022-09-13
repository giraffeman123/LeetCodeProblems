var express = require('express');
var app = express();

var isNumInArr = false;
app.get('/binarySearch/:number', async(req, res) =>{     
    var number = req.params.number;
    var nums = Array.from(Array(500).keys());   
    
    var min = 0; 
    var max = nums.length-1;
    
    binarySearch(min,max,nums,number);    
    res.status(200).json(isNumInArr);    
});

var binarySearch = function(min,max,nums,target){    
    if(min > max)
        isNumInArr = false;
    else{
        var midpoint = Math.trunc((min+max) / 2);    
        if(nums[midpoint] == target)
            isNumInArr = true;
        else if(nums[midpoint] > target){
            binarySearch(min,midpoint,nums,target);
        }else{
            binarySearch(midpoint+1,max,nums,target);
        }
    }
};


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});