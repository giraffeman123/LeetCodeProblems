var express = require('express');
var app = express();

app.get('/binaryPermutation/:number', async(req,res) => {
    var number = parseInt(req.params.number);
    binaryPermutation("",number);
    res.status(200).json(binaryResult);
});

var binaryResult = [];
var binaryPermutation = function(combination, n){
    if(combination.length == n)
        binaryResult.push(combination);
    else{
        binaryPermutation(combination+"0",n);        
        binaryPermutation(combination+"1",n);        
    }
}

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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});