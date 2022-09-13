var express = require('express');
var app = express();

var result = [];

app.get('/letterCombinationsOfNumber/:num', async(req, res) =>{            
    var num = req.params.num;    
    if(num.length <= 0 || num.length > 4 || num === ""){        
    }else{        
        recursiveCombination(num,"",0);
    }  
    res.status(200).json(result);
    result = [];
});

function recursiveCombination(num, letterCombinationArray, digitPos){
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

    if(letterCombinationArray.length === num.length){
        result.push(letterCombinationArray);
    }else{
        var lettersOfDigit = phoneCombinations[num[digitPos]];
        for(var i=0;i<lettersOfDigit.length;i++){     
            var letter = lettersOfDigit.charAt(i);       
            if(letterCombinationArray.length < num.length){                
                letterCombinationArray += letter;
                var nextDigitPos = digitPos+1;
                recursiveCombination(num,letterCombinationArray,nextDigitPos);
                letterCombinationArray = letterCombinationArray.slice(0,-1);
            }
        }
    }

}

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});