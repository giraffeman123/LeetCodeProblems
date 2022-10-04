var express = require('express');
var app = express();

app.get('/minTimeColorfulRope', async(req, res) =>{            
    var colors = "aaabbbabbbb";
    var neededTime = [3,5,10,7,5,3,5,5,4,8,1];
    res.status(200).json(minCost(colors,neededTime));
});

var minCost = function(colors, neededTime) {
    var right = 0;    
    var totalNeededTime = 0;
    for(var left = 0; left < colors.length-1; left++){          
        if(colors[left] == colors[left+1]){
            right = 0;      
            var totalRemovalTimePerGroup = 0; 
            var maxRemovalTimePerGroup = Number.MIN_SAFE_INTEGER;
            while(colors[left+right] == colors[left+right+1]){
                if(neededTime[left+right] > neededTime[left+right+1]){
                    if(neededTime[left+right] > maxRemovalTimePerGroup)
                        maxRemovalTimePerGroup = neededTime[left+right];            
                }                    
                else{
                    if(neededTime[left+right+1] > maxRemovalTimePerGroup)
                        maxRemovalTimePerGroup = neededTime[left+right+1];            
                }                    
                totalRemovalTimePerGroup += neededTime[left+right];
                right++;
            }           
    
            totalRemovalTimePerGroup += neededTime[left+right];
    
            left += right;
            totalNeededTime += (totalRemovalTimePerGroup-maxRemovalTimePerGroup);            
        }
    }
    return totalNeededTime;
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});