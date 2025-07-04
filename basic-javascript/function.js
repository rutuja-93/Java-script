// // //function = function is self content block of statement to perform some specific task
// // //name should be camlecase eg, checkPrime
// // // function declaration
// // //syntax function functionname(){}

// // //call : functionname(parameter)

// // function greet(name){
// //     console.log("Hello,Good Afternoon", name);
// // }
// // greet("Rutuja");
// // greet("everyone");

// // // 1 print sum  of two numbers using function

// // function addNumbers(num1,num2){
// //     const sum=num1+num2;
// //     console.log("sum is" , sum);
// // }
// // addNumbers(50, 30);

// // // 2 write a function name check even odd which will take anumber input and print

// // function checkEventOdd(num3){
// //     if(num3 % 2==0){
// //         console.log("number is even" );
// //     }
// //     else{
// //         console.log("number is odd")
// //     }
// // }
// // checkEventOdd(3);

// // //3  write function and take a two numbers and print largest

// // function largestNumber(num1,num2){
// //     if(num1>num2){
// //         console.log("number is largest", num1)
// //     }else{
// //         console.log("number is largest", num2)
// //     }
// // }
// // largestNumber(80,30);

// // // 4 increase number by 1 using function
// // // after return code can not execute

// // function increaseNumBy1(num1){
// //     let newNum= num1+1;
// //     return newNum;
// // }
// // const num1= increaseNumBy1(500);
// // const num2= increaseNumBy1(300);
// // console.log(num1);
// // console.log(num2);


// // primitive datatype ==  create different copy does not change the function

// //Nonprimitive (reference) datatype == it does not create copy it change in directly function



// //Problem solving

// // 1 write a function that take two numbers and return their sum

// function addNumbers(num1,num2){
//     let sum=num1+num2;
//     return sum;
// }
// console.log(addNumbers(50, 30));


// 2 write a function that accept three numbers and return largest one

// function findLargest(a, b, c) {
//     let max = a;
  
//     if (b > max) {
//       max = b;
//     }
  
//     if (c > max) {
//       max = c;
//     }
  
//     return max;
//   }
//   console.log(findLargest(20,80,100));

// 2 write a function that accept three numbers and return largest one

//   function findMax(num1,num2,num3){
//     const maxNum=Math.max(num1,num2,num3);
//     console.log(maxNum);
//   }
//   findMax(98,90,92);

//   // 3 write afunction that take two numbers and print multiplication table

//   function printMultiplicationTable(number, limit) {
//     for (let i = 1; i <= limit; i++) {
//       console.log( (number * i));
//     }
//   }
//   printMultiplicationTable(6, 10);

  


//   // 4 write a function taht take a string and number then return the string repeated that number of times
  
//   function repeatedString(str , count){
//     let newStr="";
//     for(i=0;i<count;i++){
//         newStr+=str;
//     }
//     return newStr;
//   }
//   console.log(repeatedString("Hello",2));

//   // 5 write factorial that claculate the factorial of given number

//   function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   console.log(factorial(5)); // Output: 120


//   // 6 write a function that calculate the sum of all digit in a numbers

  function sumOfDigit(n) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;     // get the last digit
      sum += digit;           // add to sum
      n = parseInt(n / 10); // remove the last digit
    }
    return sum;
  }
  let result = sumOfDigit(523); 
  console.log("Sum is", result); 
  


  //var= function scope we can access in function
  //let const= block scope access with in only block


  //global = they are not declared inside any block . any body can access that 
  //local = they are declared inside the block . that can access only block scope

  //default parameter = if value is not pass then default value is display.


  // 7 print reverse number using function

  // function reverseNumber(n) {
  //   let reverse = 0;
  //   while (n > 0) {
  //     let digit = n % 10;            // get the last digit
  //     reverse *= 10 + digit; // append digit to reverse
  //     n = parseInt(n / 10);          // remove the last digit
  //   }
  //   return reverse;
  // }
  
  // let result = reverseNumber(738);
  // console.log("Reversed number is", result);  // Output: 837

  // 8 calculate the number of digit
  
  // function countDigits(n) {
  //   let count = 0;
  //   while (n > 0) {
  //     count++;
  //     n = parseInt(n / 10); // remove the last digit
  //   }
  //   return count;
  // }
  
  // let result = countDigits(53647);
  // console.log("Number of digits is", result); // Output: 3


  // 9 calculate the given number is palindrome or not
  
  function isPalindrome(n) {
    let original = n;
    let reverse = 0;
  
    while (n > 0) {
      let digit = n % 10;
      reverse = reverse * 10 + digit;
      n = parseInt(n / 10);
    }
  
    return original === reverse;
  }
 
  let number = 156;
  if (isPalindrome(number)) {
    console.log(number + " is a palindrome number.");
  } else {
    console.log(number + " is not a palindrome number.");
  }
  


  