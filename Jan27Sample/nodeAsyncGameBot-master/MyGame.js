    let min =1;
    let max = 1000;
    let guess = 0;
    let round = 1;
    let message="";

module.exports = class MyGame{
    makeAMove(input, fCallback){
    if(guess==0){
    message="Welcome to Over and Under,Please this a number between 1 and 1000, and I will guess it, please tell me it is high or low input start to start";
    fCallback([message]); 
    guess=Math.floor((max - min) / 2) + min;  
    console.log(guess);
    message= "is it "+guess+"? type high or low or yes";
    fCallback([message]); 
    return;
    }
    if(input=="high"){
            max=guess;
            guess=Math.floor((max - min) / 2) + min;
            message= "is it "+guess+"? type high or low or yes";
            round++;
        }
        else if(input=="low"){
            min=guess;
            guess=Math.floor((max - min) / 2) + min;
            message= "is it "+guess+"? type high or low or yes";
            round++;
        }
        else if(input=="yes"){
            message= "yeah I win I guessed "+round+" times";
        }
        else if(input=="start"){

        }
        else if(min==max){
            if(input=="low"){
                min+=10;
                max=1000;
                guess=Math.floor((max - min) / 2) + min;
                message= "is it "+guess+"? type high or low or yes";
            }
            if(input=="high"){
                max-=10;
                min=1;
                guess=Math.floor((max - min) / 2) + min;
                message= "is it "+guess+"? type high or low or yes";
            }
        }
        else{
            if(input<0){
            message="please input a number over 1";}
            if(input>1000){
                message="please input a number less than 1000";}
            
        }       
        setTimeout(() => { 
            fCallback([message]); 
        }, 300);
        
    }
}