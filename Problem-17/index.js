var express = require('express');
var app = express();

app.get('/phonePermutation/:number', async(req,res) => {
    phoneResult = [];
    var phoneNumber = req.params.number;
    phonePermutation("",phoneNumber,0);
    res.status(200).json(phoneResult);
});

var phoneResult = [];
var phoneCombinations = {
    "2":"abc",
    "3":"def",
    "4":"ghi",
    "5":"jkl",
    "6":"mno",
    "7":"pqrs",
    "8":"tuv",
    "9":"wxyz",
};
var phonePermutation = function(combination, phoneNumber, currentPhoneNumberIndex){
    if(combination.length == phoneNumber.length)
        phoneResult.push(combination);
    else{
        
        var letterOfDigit = phoneCombinations[phoneNumber[currentPhoneNumberIndex]];
        for(var i = 0; i < letterOfDigit.length; i++){
            combination += letterOfDigit[i];
            currentPhoneNumberIndex++;
            phonePermutation(combination,phoneNumber,currentPhoneNumberIndex);                
            combination = combination.slice(0,-1);
            currentPhoneNumberIndex--;
        }
    }
}


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



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});