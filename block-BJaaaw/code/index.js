// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number=Number(prompt('Enter a number'));
if(number%2 === 0)
{
  console.log(`number is even`);
}
else{
  console.log(`number is odd`);
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1=Number(prompt('Enter a num1'));
let num2=Number(prompt('Enter a num2'));
if(num1>num2)
{
  alert(`max value is ${num1}` );
}
else{
  alert(`max value is ${num2}`);
}


// 3. Convert the above code using`?` terniary operator

let num1=Number(prompt('Enter  num1'));
let num2=Number(prompt('Enter  num2'));
num1>num2 ? alert(`max value is ${num1}`) : alert(`max value is ${num2}`) ;

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/


let housename=prompt("Enter house name");
if(housename === "stark")
{
  console.log(" Winter is coming");
}
else if(housename === "lannister"){
console.log(" A lannister always pays his debt");
}
else{
  console.log(" All men must die");
}


// 5. Convert the above code using`?` terniary operator
/*
let housename=prompt("Enter house name");
housename === "stark" ? console.log(" Winter is coming")
: housename === "lannister" ? console.log(" A lannister always pays his debt")
: console.log(" All men must die");
*/

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month=Number(prompt('Enter month'));
switch(month){
   // Cases for 31 Days
   case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
       console.log(`number of days in the month is 31`);
        break;
  
    // Cases for 30 Days
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`number of days in the month is 30`);
        break;
  
    // Case for 28/29 Days
    case 2:
      console.log(`number of days in the month is 28`);
        break;
    default:
        console.log("Invalid Month.");
      break;
    }
  

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary=Number(prompt("Enter the salary"));
let inhand;
if(salary<=20000)
{
   inhand=salary-(salary*0.1);
   console.log(`in-hand salary is ${inhand}`);
}
else if(salary<=40000)
{
   inhand=salary-(salary*0.2);
   console.log(`in-hand salary is ${inhand}`);
}
else if(salary>50000)
{
   inhand=salary-(salary*0.3);
   console.log(`in-hand salary is ${inhand}`);
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`
*/

// if else 

let marks=Number(prompt("Enter marks"));
if(marks > 100)
{
  alert("Marks can't be greater than 100");
}
else if(marks > 80 && marks<100)
{
  alert("Grade A");
}
else if(marks > 50 && marks<80)
{
  alert("Grade B");
}
else if(marks > 30 && marks<50)
{
  alert("Grade C");
}
else {
  alert("Grade D");
}

// switch 

let marks=Number(prompt("Enter marks"));
switch(marks/10){

case 10:
case 9:
case 8:
  alert("Grade A");
  break;

 case 5:
 case 6:
 case 7:

  alert("Grade B");
  break;

case 3:
case 4:

  alert("Grade c");
  break;

case 0:

  alert("Grade D");
  break;
default:
  alert("Marks can't be greater than 100");
  break;
  
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt(`What is the weather like outside?`);
if(weather === `sunny`)
{
  alert(`Wear a T-shirt`);
}
else if(weather === `rainy`)
{
  alert(`Don't forget to take your raincoat`);
}
else if(weather === `hot`)
{
  alert(`Get a hanky`);
}
else if(weather === `freezing`)
{
  alert(`Get your sweeter on`);
}
else{
  alert(`Not a valid input`);
}