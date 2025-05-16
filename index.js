
//Add Two numbers

function add(x,y){
  let result = x + y;
return result;

}
let allresult = add(100,300) + add(600,500) + add(50,80);
console.log(allresult);

//Even or Odd checker
  
function isEven(num){
    //if(num%2===0){
    //    return "Even";
    //} else {
     //   return "Odd";
  // }
  return num%2===0? "Even" : "Odd"
}
 
console.log (isEven(3));


//Convert Celsius to Fahrenheit

function CeltoFahrentheit(celsius){
  return(celsius*9/5)+32;

}
console.log(CeltoFahrentheit(2));

//Square of a number

function SquareNumber(num){
    return num*num;
}
console.log(SquareNumber(6));

//Get First Character of a String

 function firstCharacter(str){
return str.charAt(1);
 }

 console.log(firstCharacter("ggs ez"));

//! Number is positive Or negative

function CheckNum (num){
    //if (num>= 0){
  //return "positive";
   // }else{
   //  return"negative";
 // }
return num >= 0? "positive" : "negative";
 }

 console.log(CheckNum(0));

 //Multiply two numbers

 function multiply(x,y){
    if(typeof(x)!=="number" ){
        return "1st number is not a number";
    }else if (typeof y !== "number"){
        return "1st Number is not a number";
    } else {
        return x * y;
    }
}
console.log(multiply("s",10));


//Convert Minutes to Sec

function minutesTosec(minute){
    return minute* 60;

}
console.log (minutesTosec(60));

//Concatenate Two strings

function Concatenate (x,y){
    return x + " " + y
}
console.log(Concatenate("hello", "javascript"));

//Check if String contains a word

function checkStr(sentence,word){
return sentence.includes(word);
}
console.log(checkStr("i love javascript", "javascript"));