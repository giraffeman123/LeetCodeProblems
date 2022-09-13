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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});