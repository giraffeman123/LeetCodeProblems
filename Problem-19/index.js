var express = require('express');
var app = express();

app.get('/targetSumWays', async(req,res) => {
    var nums = [1,1,1,1,1]; var target = 3;    
    res.status(200).json(findTargetSumWays(nums,target));
});

var findTargetSumWays = function(nums, target) {
    targetSumresult = 0;
    if(nums.length >= 1 && nums.length <= 20)
        recursiveTargetSumWays(nums,target,"");
    return targetSumresult;
};

var targetSumresult = 0;
var recursiveTargetSumWays = function(nums,target,combination){
    if(combination.length == nums.length){
        var sumOperation = "";
        for(var i = 0; i < nums.length; i++){
            sumOperation += combination[i] + nums[i];
        }        
        if(eval(sumOperation) == target)
            targetSumresult++;
    }else{        
        recursiveTargetSumWays(nums,target,combination+"+");
        recursiveTargetSumWays(nums,target,combination+"-");
    }
};

app.get('/wordSearch', async(req,res) => {
    var board = [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]];
    var word = "AAAAAAAAAAAABAA";    
    
    res.status(200).json(exist(board,word));
});

var exist = function(board, word){
    result = false;
    if((word.length >= 1 && word.length <= 15) && board.length >= 1)
        searchWord(board,word,[],"");
    return result;
};

var result = false;
var searchWord = function(board,word,combinationIndex,combination){
    if(combinationIndex.length == word.length){            
        result = true;
    }else{
        for(var i = 0; i < board.length; i++)
            for(var j = 0; j < board[i].length; j++){  
                var isLetterInWord = word.includes(board[i][j]);                
                var isLetterAdjacent = (combinationIndex.length > 0 ?
                                (
                                (combinationIndex[combinationIndex.length-1][0] == i
                                && (Math.abs(j-combinationIndex[combinationIndex.length-1][1])) == 1)
                                || (combinationIndex[combinationIndex.length-1][1] == j
                                && (Math.abs(i-combinationIndex[combinationIndex.length-1][0])) == 1)
                                ) : true                        
                            );
                var isCellNotRepeated = (combinationIndex.length > 0 ?
                                (!isArrayRepeated(combinationIndex,[i,j])) 
                                : true
                            );
                var isLetterNextInWord = (combinationIndex.length > 0 ?
                                (
                                    word[combination.length] == board[i][j]
                                )
                                :true
                            );
                var isFirstLetter = (combinationIndex.length == 0 ? (word[0] == board[i][j]) : true);

                if(isLetterInWord
                    && isLetterAdjacent && isCellNotRepeated 
                    && isLetterNextInWord && isFirstLetter)
                {
                    combinationIndex.push([i,j]);
                    combination += board[i][j];
                    searchWord(board,word,combinationIndex,combination);
                    combinationIndex.pop();
                    combination = combination.slice(0,-1);
                }                    
            }        
    }
};

var isArrayRepeated = function(mArray,array){
    var result = false;
    for(var i = 0; i<mArray.length; i++)
        if(mArray[i][0] == array[0] && mArray[i][1] == array[1]){
            result = true;
            break;
        }            
    return result;
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});