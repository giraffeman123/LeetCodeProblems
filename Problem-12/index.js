var express = require('express');
var app = express();

app.get('/intersect', async(req, res) =>{                
    var nums1 = [1,2,2,1]; var nums2 = [2,2];
    var intersectedArray = intersect(nums1,nums2); 
    res.status(200).json(intersectedArray);    
});

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    var intersectValues = [];
    
    if(nums1.length > nums2.length){
        for(var j = 0; j < nums2.length; j++)
            if(nums1.includes(nums2[j])){
                intersectValues.push(nums2[j]);                
                nums1.splice(nums1.indexOf(nums2[j]),1);                
            }                
    }else{
        for(var i = 0; i< nums1.length;i++)
            if(nums2.includes(nums1[i])){
                intersectValues.push(nums1[i]);                                
                nums2.splice(nums2.indexOf(nums1[i]),1);
            }                
    }

    return intersectValues;
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});