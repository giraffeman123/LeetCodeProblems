var express = require('express');
var app = express();
app.get('/parse-string/:cleanString/:numRows', function (req, res) {
    var cleanString = req.params.cleanString;
    var numRows = req.params.numRows;
    var formatString = "";

    if(cleanString.length == 1 || numRows == 1){
        formatString = cleanString;
    }else{
        var pattern = (2*numRows)-2;    
        for(var i = 0; i<numRows;i++){
            for(var j = i;j<cleanString.length;j+=pattern){
                if(i == 0 || i == (numRows-1)){
                    formatString += cleanString[j];
                }
                else{
                    if(j <= numRows){
                        formatString += cleanString[j];
                    }else{
                        var previousValSeq = ((i+1)*2)-2;
                        formatString += cleanString[j-previousValSeq];
                        formatString += cleanString[j];
                    }                
                }
            }
            if(i != 0 && i != (numRows-1)){
                var previousValSeq = ((i+1)*2)-2;
                if(cleanString[j-previousValSeq] != null)
                    formatString += cleanString[j-previousValSeq];
            }
        }        
    }
    
    res.send(formatString.toString());
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});