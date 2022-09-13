var express = require('express');
var app = express();

app.get('/getIndicesOfSumTarget', async(req, res) =>{                
    var nums = [2,7,11,15];
    var target = 9;
    var indices = twoSum(nums,target);        
    res.status(200).json(indices);    
});

// O(n) solution
var twoSum = function(nums, target){
    var complements = new Object();

    for(var i = 0; i<nums.length;i++){
        var complement = target - nums[i];

        if(complement in complements){
            return [complements[complement],i];
        }

        complements[nums[i]] = i; 
    }
}

/*
// O(n^2) solution
var twoSum = function(nums, target){
    var indices = [];
    for(var i = 0; i < nums.length;i++)
        for(var j = i + 1; j < nums.length; j++){
            var sum = nums[i] + nums[j];
            if(sum == target){
                indices.push(i);
                indices.push(j);
                break;
            }                
        }

    return indices;
};
*/


/*
var result;
var twoSum = function(nums,target){    
    twoSumRecursive(nums,target,0,0,[]);
    return result;
};

// O(nlogn) solution
var twoSumRecursive = function(nums, target, nextPos, currentSum, currentArray){
    if(currentSum == target && currentArray.length == 2){
        result = currentArray.map((x) => x);
    }else{        
        for(var i = nextPos; i<nums.length;i++){
            currentSum += nums[i];
            if(currentArray.length <= 2){
                currentArray.push(i);
                twoSumRecursive(nums,target,i+1,currentSum,currentArray);
                currentArray.pop();
                currentSum -= nums[i];
            }
        }
    }
};
*/

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});