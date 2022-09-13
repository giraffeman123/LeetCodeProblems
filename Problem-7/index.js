var express = require('express');
var app = express();

app.get('/checkForDuplicates', async(req, res) =>{                
    var nums = [];
    var areDuplicatesInArray = containsDuplicates(nums);
    res.status(200).json(areDuplicatesInArray);    
});

var containsDuplicates = function(nums){    
    var containsDuplicates = false;
    var numArray = [];
    for(var i = 0; i < nums.length; i++)
        if(!numArray.includes(nums[i]))
            numArray.push(nums[i]);
        else{
            containsDuplicates = true;
            break;
        }
    return containsDuplicates;
};

nums = [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function(nums) {
    var sum;
    var maxSum = nums[0];    
    
    if(nums.length == 1)
        maxSum = nums[0];
    else{
        for(var i = 0; i<nums.length;i++){    
            sum = 0;
            for(var j=i;j<nums.length;j++){
                sum += nums[j];
                if(sum > maxSum)
                    maxSum = sum;
            }
        }        
    }           
    return maxSum; 
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});