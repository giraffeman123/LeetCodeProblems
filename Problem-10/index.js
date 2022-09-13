var express = require('express');
var app = express();

app.get('/mergeTwoSortedArrays', async(req, res) =>{                
    var nums1 = [2,2,3,0,0,0]; m = 3; nums2 = [1,5,6]; n = 3;    
    var mergedArray = merge(nums1, m, nums2, n);        
    res.status(200).json(mergedArray);    
});

var merge = function(nums1, m, nums2, n){    
    while(m > 0 && n > 0){        
        if(nums1[m-1] > nums2[n-1]){            
            nums1[m+n-1] = nums1[m-1];            
            nums1[m-1] = 0;
            m--;            
        }else{
            nums1[m+n-1] = nums2[n-1];
            nums2.pop();
            n--;
        }
    }

    if(n > 0){        
        for(var i = 0; i<n;i++){
            if(nums1[i] == 0){
                nums1[i] = nums2[i];
            }
        }        
    }
    return nums1;
};

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});