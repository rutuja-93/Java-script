// // 1 if
// let age=50;
// if (age>=18){
//     console.log("you can vote");
// }
 
// // positive no
// let num=12;
// if(num > 0){
//     console.log("given no is possitive");
// }

// // 2 if else

// if(num>0){
//     console.log("no is possitive");
// }
// else{
//     console.log("no is negative");
// }

// // 3 if elseif

// let no=-10
// if(no>0){
//     console.log("no is possitive");
// }
//  else if(no==0){
//     console.log("no is zero");
//  }
//  else{
//     console.log("no is negative");
//  }

// // 

//  let language = "english";
//  if(language=="marathi"){
//     console.log("jay maharashtra");
//  }
//  else if(language=="hindi"){
//     console.log("namaste");
//  }
//  else if(language=="english"){
//     console.log("hello");
//  }
//  else{
//     console.log("invalid language");
//  }

//  // even odd
//  let no1=15;
//  if(no1 % 2==0){
//     console.log("given no is even");
//  }
//  else{
//    console.log("given no is odd");
//  }
 
//  //fizzbuzz
//  let number = 15
//  if (number % 3 === 0 && number % 5 === 0) {
//    console.log("fizzbuzz");
// } else if (number % 3 === 0) {
//    console.log("fizz");
// } else if (number % 5 === 0) {
//    console.log("buzz");
// } else {
//    console.log("koi match nahi mila");
// }


// //falsy values = 0, -0, NAN , "", 0n ,undefined, null, false (this value will be consider as false by java script)

// if(0n){
//    console.log("it is truthy value");
// }
// else{
//    console.log("it is falsy value");
// }



// let day= "6";
// if(day==1){
//    console.log("monday");
// }
// else if(day==2){
//    console.log("tuesday");
// }
// else if(day==3){
//    console.log("wednesday");
// }
// else if(day==4){
//    console.log("thursday");
// }
// else if(day==5){
//    console.log("friday");
// }
// else if(day==6){
//    console.log("saturday");
// }
// else if(day==7){
//    console.log("sunday");
// }
// else{
//    console.log("invalid input");
// }

// // 4 switch case  = switch case check datatype. it is used strict eqality


// switch (day){
//    case 1:
//        console.log("monday");
//    break;
//    case 2:
//        console.log("tuesday");
//    break;
//    case 3: 
//    console.log("wednesday");
//    break;
//    case 4:
//        console.log("thursay");
//    break;
//    case 5:
//        console.log("friday");
//    break;
//    case 6:
//        console.log("saturday");
//    break;
//    case 7: 
//    console.log("sunady");
//    break;
//    default :
//    console.log("invalid input");
//    break;
// }





// practice questions
// 1 check age if age is grether than 18 the n print adult otherwise minor
let age = 10;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// 2 Write a program that takes two numbers and prints the larger one.
let num1 = 40;
let num2 = 42;

if (num1 > num2) {
    console.log(num1 + " is larger.");
} else if (num2 > num1) {
    console.log(num2 + " is larger.");
} else {
    console.log("Both numbers are equal.");
}


// 3 print grade evaluater
let score = 95; 
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
} else if (score >= 0 && score < 60) {
    console.log("Grade: F");
} else {
    console.log("Invalid score. Please enter a value between 0 and 100.");
}


// 4 print leap year
let year = 2026;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


// 5 if number is between 10&50 then print it between 10 and 50

let no= 80;
if(no>=10 && no<=50){
   console.log("number is between 10 and 50" );
}else{
   console.log("number is not between 10 & 50");
}

// 6 if student have 40 marks in three subject then print pass other wise fail
let mark1 = 39;
let mark2 = 72;
let mark3 = 39;

if (mark1 >= 40 && mark2 >= 40 && mark3 >= 40) {
    console.log("Student Passed.");
} else {
    console.log("Student Failed.");
}



//
let color = "green"; 

if (color === "red") {
    console.log(" Stop");
} else if (color === "yellow") {
    console.log(" Get Ready");
} else if (color === "green") {
    console.log(" Go");
} else {
    console.log(" Invalid color. Please enter red, yellow, or green.");
}






let no1 = 40;
let no2 = 42;
let no3 =10

if (no1 > no2) {
    console.log(no1 + " is larger.");
} else if (num2 > num1) {
    console.log(no2 + " is larger.");
} 
else if(no3 > no2){
    console.log(no3 + " is larger.");
}

else {
    console.log("Both numbers are equal.");
}