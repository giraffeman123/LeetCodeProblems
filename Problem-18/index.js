var express = require('express');
var app = express();

app.get('/permutation', async(req,res)=>{
    var nums = [1,2,3];
    res.status(200).json(permute(nums));    
});

var result = [];
var permute = function(nums) {
    result = [];
    if(nums.length >= 1 && nums.length <= 6)
        doPermutation(nums,[]);
    return result;
};

var doPermutation = function(nums,combination){
    if(combination.length == nums.length){        
        result.push(combination.map((x) => x));
    }else{
        for(var i = 0; i < nums.length; i++){ 
            if(!combination.includes(nums[i])){
                combination.push(nums[i]);
                doPermutation(nums,combination);        
                combination.pop();     
            }                                   
        }
    }    
      
}


app.get('/targetSumWays', async(req,res) => {
    var nums = [1,2,3]; var target = 3;    
    res.status(200).json(findTargetSumWays(nums,target));
});

var findTargetSumWays = function(nums, target) {
    targetSumresult = [];
    if(nums.length >= 1 && nums.length <= 20)
        recursiveTargetSumWays(nums,"+-"+nums.toString().replaceAll(',',''),target,"");
    return targetSumresult;
};

function isNumber(str){
    return /^\d$/.test(str);
}

var targetSumresult = [];
var recursiveTargetSumWays = function(nums,allChars,target,combination){
    if(combination.length == (nums.length*2)){
        if(eval(combination) == target)
            targetSumresult.push(combination);
    }else{        
        for(var i = 0; i < allChars.length; i++){
            var dontfilterNode = ((combination.length) % 2 == 1 ?  isNumber(allChars[i]):!isNumber(allChars[i]) );
            
            if(dontfilterNode){
                combination += allChars[i];
                recursiveTargetSumWays(nums,allChars,target,combination);
                combination = combination.slice(0,-1);
            }                        
        }
        
    }
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});