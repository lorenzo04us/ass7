let number1 = Number(prompt("Enter the first number"));
let number2 = Number(prompt("Enter the second number"));
let number3 = Number(prompt("Enter the third number"));
let result;




    if (number1 > number2 && number1 > number3){

        result = number1;
    }
    
    else if (number2 > number1 && number2 > number3) {

        result = number2;
        
      } else {

        result = number3;
    
      }

      alert("The largest number is " + result);
      


  
