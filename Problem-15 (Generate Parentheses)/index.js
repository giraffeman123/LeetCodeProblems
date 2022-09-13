var express = require('express');
var app = express();

app.get('/generateParentheses/:number', async(req, res) =>{                
    var number = parseInt(req.params.number);
    
    result = [];
    if(number == 1)
        result.push("()");
    else if(number > 1 && number <= 8){
        generateParenthesis(0,0,"",number);
    }    
    res.status(200).json(result);    
});

var result = [];
var generateParenthesis = function(openP,closeP,combination,n){
    if(openP == n && closeP == n){
        result.push(combination);
        return;
    }

    if(openP < n)
        generateParenthesis(openP+1,closeP,combination+"(",n);
    if(closeP < openP)
        generateParenthesis(openP,closeP+1,combination+")",n);
};

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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});