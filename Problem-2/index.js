var express = require('express');
var app = express();
app.get('/reverse-integer/:integerValue', function (req, res) {
    var intValue = req.params.integerValue;
    var result = 0;

    if(intValue > 2147483647 || intValue < -2147483648)
        result = 0;
    else{
        var reverseInt = "";
        for(var i = intValue.length-1; i>=0;i--){
            reverseInt += intValue.toString()[i];
        }

        if(intValue < 0){
            reverseInt = reverseInt.substring(0, reverseInt.length-1);
            reverseInt = "-"+reverseInt;
        }            

        if(reverseInt > 2147483647 || reverseInt < -2147483648)
            result = 0;
        else
            result = reverseInt;
    }

    res.send(result.toString());    
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});