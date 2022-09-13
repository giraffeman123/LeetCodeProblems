var express = require('express');
var app = express();

app.get('/restoreIpAddresses/:ip', async(req,res) => {
    var testIp = req.params.ip;    
    res.status(200).json(restoreIpAddresses(testIp));
});

var restoreIpAddresses = function(s) {
    return doRestoreIpAddress(s);
};

var result = [];
var doRestoreIpAddress = function(s){
    result = [];
    if(s.length >= 4 || s.length <= 12)
        recursiveRestoreIpAddresses(s,"",0);
    return result;
};


var recursiveRestoreIpAddresses = function(testIp,combination,combinationSum){
    if(combination.length == 4 && combinationSum == testIp.length){
        var ip = isValidCombination(testIp, combination);
        if(ip.length > 0)
            result.push(ip);
    }else{
        for(var i=1;i<=3;i++){            
            combination += +i.toString();
            combinationSum += i;
            if(combinationSum <= testIp.length){
                recursiveRestoreIpAddresses(testIp,combination,combinationSum);    
                combination = combination.slice(0,-1);
                combinationSum -= i;
            }
        }        
    }
};

var isValidCombination = function(testIp, combination){
    var firstInt = testIp.substr(0, parseInt(combination[0]));
    var secondInt = testIp.substr(parseInt(combination[0]), parseInt(combination[1]));
    var thirdInt = testIp.substr(parseInt(combination[0])+parseInt(combination[1]), parseInt(combination[2]));
    var fourInt = testIp.substr(parseInt(combination[0])+parseInt(combination[1])+parseInt(combination[2]), parseInt(combination[3]));
    
    var isValidFirstInt = 
        (firstInt.length > 1 ? firstInt[0] != '0' : true)
        && (parseInt(firstInt) >= 0 && parseInt(firstInt) <= 255);
    var isValidSecondInt = 
        (secondInt.length > 1 ? secondInt[0] != '0' : true)
        && (parseInt(secondInt) >= 0 && parseInt(secondInt) <= 255);
    var isValidThirdInt = 
        (thirdInt.length > 1 ? thirdInt[0] != '0' : true)
        && (parseInt(thirdInt) >= 0 && parseInt(thirdInt) <= 255);
    var isValidFourInt = 
        (fourInt.length > 1 ? fourInt[0] != '0' : true)
        && (parseInt(fourInt) >= 0 && parseInt(fourInt) <= 255);

    if(isValidFirstInt && isValidSecondInt && isValidThirdInt && isValidFourInt)
        return firstInt + '.' + secondInt + '.' + thirdInt + '.' + fourInt;
    else
        return '';
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});