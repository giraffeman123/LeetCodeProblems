var express = require('express');
var app = express();

app.get('/intToRoman/:num', async(req, res) =>{            
    var num = req.params.num;

    if(num < 1 || num > 3999){
        res.status(400).json({message:"number is out of constraints"});
    }else{
        var romanNumber = "";
        var leftOver = num;

        while(leftOver > 0){
            if(leftOver >= 1000){
                romanNumber += "M".repeat(leftOver/1000);
                leftOver = leftOver % 1000;                
            }
            else if(leftOver >= 500 && leftOver < 1000){
                if(leftOver < 900){
                    romanNumber += "D";
                    leftOver = leftOver % 500;
                }                    
                else {
                    romanNumber += "CM";                        
                    if(leftOver == 900)
                        leftOver = 0;
                    leftOver = leftOver % 900;
                }                                    
            }
            else if(leftOver >= 100 && leftOver < 500){
                if(leftOver < 400){
                    romanNumber += "C".repeat(leftOver/100);
                    leftOver = leftOver % 100;            
                }                    
                else{
                    romanNumber += "CD";                 
                    if(leftOver == 400)
                        leftOver = 0;
                    leftOver = leftOver % 400;            
                }                                    
            }
            else if(leftOver >= 50 && leftOver < 100){
                if(leftOver < 90){
                    romanNumber += "L";
                    leftOver = leftOver % 50;            
                }                    
                else {
                    romanNumber += "XC";                        
                    if(leftOver == 90)
                        leftOver = 0;
                    leftOver = leftOver % 90;
                }                                    
            }
            else if(leftOver >= 10 && leftOver < 50){
                if(leftOver < 40){
                    romanNumber += "X".repeat(leftOver/10)   
                    leftOver = leftOver % 10;            
                }                    
                else{                    
                    romanNumber += "XL";                                      
                    if(leftOver == 40)
                        leftOver = 0;
                    leftOver = leftOver % 40;            
                }                                    
            }
            else if(leftOver >= 5 && leftOver < 10){
                if(leftOver < 9){
                    romanNumber += "V";   
                    leftOver = leftOver % 5;   
                }                    
                else {
                    romanNumber += "IX";                       
                    leftOver = 0;
                }                                             
            }
            else if(leftOver >= 1 && leftOver < 5){
                if(leftOver < 4)
                    romanNumber += "I".repeat(leftOver/1);
                else
                    romanNumber += "IV";                                   
                leftOver = leftOver % 1;            
            }   
        }
           
        res.status(200).json({result:romanNumber});
    }    
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});