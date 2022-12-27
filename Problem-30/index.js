var express = require('express');
var app = express();

app.get('/uniquePermutations', async(req, res) =>{                
    var nums = [1,1,2];
    res.status(200).json(getUniquePermutations(nums));
});

var getUniquePermutations = function(nums) {
    permutations = [];
    permutationsStr = [];
    if(nums.length > 0)
        permuteRecursive(nums, [], [], "");
    return permutations;
};

var permutations = [];
var permutationsStr = [];
var permuteRecursive = function(nums, permutation, permutationPos, permutationStr){
    if(permutation.length == nums.length && !permutationsStr.includes(permutationStr)){ 
        permutationsStr.push(permutationStr);   
        permutations.push(permutation.map((x) => x));  
    }            
    else{
        for(var i = 0; i < nums.length; i++){
            if(!permutationPos.includes(i))
            {
                permutation.push(nums[i]);
                permutationPos.push(i);
                permuteRecursive(nums, permutation, permutationPos, permutationStr+nums[i]);
                permutation.pop();
                permutationPos.pop();
            }
        }            
    }
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});