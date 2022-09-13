var express = require('express');
var app = express();

app.get('/isPalindrome/:number', async(req, res) =>{                
    var number = parseInt(req.params.number);
    res.status(200).json("Is " + number + " Palindrome? "+isPalindrome(number));    
});

var isPalindrome = function(x){
    var forwards = ""; var backwards = "";

    for(var i = 0; i < x.toString().length; i++){
        forwards += x.toString()[i];
        backwards += x.toString()[(x.toString().length-1)-i];
    }

    if(forwards == backwards)
        return true;
    else
        return false;
};


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});