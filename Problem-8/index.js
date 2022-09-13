var express = require('express');
var app = express();

app.get('/maxSubarraySum', async(req, res) =>{                
    var nums = [5,4,-1,7,8];
    var maxSum = maxSubArray(nums);
    res.status(200).json(maxSum);    
});

// divide & conquer algorithm solution O(nlogn)
var maxSubArray = function(nums) {
    var maxSum = calculateMaxSubArray(nums,0,nums.length-1);
    return maxSum;
};

function calculateMaxSubArray(nums,l,r){
    if(l===r)
        return nums[l];
    
    var m = Math.trunc((l+r)/2);
    var leftMaxSubArray = calculateMaxSubArray(nums,l,m);
    var rightMaxSubArray = calculateMaxSubArray(nums,m+1,r);
    var crossSumMax = crossSum(nums,l,r,m);
    return Math.max(leftMaxSubArray, Math.max(rightMaxSubArray,crossSumMax));
}


function crossSum(nums,l,r,m){
    var sum = 0;
    var maxLeftSum = Number.MIN_SAFE_INTEGER;
    for(var i = m; i >= l; i--){
        sum += nums[i];
        if(sum > maxLeftSum)
            maxLeftSum = sum;
    }
    sum = 0;

    var maxRightSum = Number.MIN_SAFE_INTEGER;
    for(var j = m+1; j <= r; j++){
        sum += nums[j];
        if(sum > maxRightSum)
            maxRightSum = sum;
    }

    return Math.max(maxLeftSum+maxRightSum, Math.max(maxLeftSum, maxRightSum));
}


// O(n^2) solution
var notOptimalMaxSubArray = function(nums) {
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