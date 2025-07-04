// sum of 1 to 10 numbers
// let sum = 0;
// let no = 1;

// while (no <= 10) {
//   sum +=no ;
//   no++;
// }
// console.log("Sum from 1 to 10 is:", sum);


// sum of 1 to 10 even numbers

// let no1=2;
//     let no2=10;
//     let sum1=0;
// while(no1<=no2){
//     if(no1%2==0){
//        sum1=sum1+no1;
//     }
//     no1++;
// }console.log("sum of even numbers:", sum1);


// let num1=2;
// let num2=10;
// let sum2=0;
// do{
//     if(num1%2==0){
//         sum2+=num1;
//     }
//     num1++;
// }while(num1<=num2)

//  dialog box: 
 // 1 alert(message)=  Show Message to user

//  alert("Hello There");
// console.log("hello");

// 2 confirm("question")= to ask yes/ no to return boolean value

// let canDrive= confirm("can you drive a bike??");
// if(canDrive===true){
//     alert("you are allowed to get a liscence");
// }else{
//     alert("you are not allwed to get a liscence");
// }


// 3 prompt(question)= to display input box to user will return string/ null

// let age=prompt("what is your age??");
// if(age>=18){
//     alert("you can vote");
// }else{
//     alert("you can not avote");
// }


//type casting = convert one datatype to another datatype
//1 implicit = it convert attomatically one datatype to another data type 
//2 explcit = there are three using +, Number , parseInt

 // 1  Write a function that takes two numbers and returns their sum.

// let num1=prompt("enter number1");
// let num2=prompt("enter number 2")
// let sum=Number(num1)+Number(num2)
// alert("the sum is" +sum)

// 2 Write a function that convert given minutes to seconds

// let minutes = prompt("Enter the number of minutes:");
// minutes = Number(minutes);  // Convert input to number

// let seconds = minutes * 60; // Convert minutes to seconds

// alert(minutes + " minutes is equal to " + seconds + " seconds.");



// 3 "Write a program that asks the user to enter the base and height of a triangle, then calculates and displays the area of the triangle."


// let height = Number(prompt("enter height"));
// let base = Number(prompt("enter base"));
// alert(0.5 * base * height);
// console.log("Base is:", base, "and Height is:", height);


// 4 Write a program that takes two numbers from the user, shows their sum, and alerts if the first number is ≤ 100 or larger.

// let num1=Number(prompt("enter 1st no"));
// let  num2=Number(prompt("enter 2nd no"));
// alert(num1+num2)
// if(num1<100){
//     alert("number is too small")
// }
// else{
//     alert("number is largest")
// }

//5  Write a JavaScript program that takes a number from the user and checks whether it is even or odd. Show the result using an alert.

// let num = Number(prompt("Enter a number"));
// if (num % 2 === 0) {
//     alert("Number is even");
// } else {
//     alert("Number is odd");
// }



// 6 basic calculator

// let num1 = Number(prompt("Enter 1st number"));
// let num2 = Number(prompt("Enter 2nd number"));
// let operation = prompt("Enter operation (+, -, *, /)");

// switch(operation) {
//     case "+":
//         alert("Result is " + (num1 + num2));
//         break;
//     case "-":
//         alert("Result is " + (num1 - num2));
//         break;
//     case "*":
//         alert("Result is " + (num1 * num2));
//         break;
//     case "/":
//         if(num2 !== 0) {
//           alert("Result is " + (num1 / num2));
//         } else {
//           alert("Error: Division by zero");
//         }
//         break;
//     default:
//         alert("Invalid operator");
//         break;
// }



// 7 write program that takes two numbers from the user and calculates the sum of number

// let num1 = Number(prompt("Enter 1st number"));
// let num2 = Number(prompt("Enter 2nd number"));
// let sum = 0;

// for (let index = num1; index <= num2; index++) {
//     sum += index;
// }

// alert("Sum is: " + sum);


// 8 Write a JavaScript program that stores a list of state names in an array and prints each state using a for loop.

// let state=["maharashtre","goa","UP","MP","punjab","gujrat"]
// for(let index=0;index<state.length;index++){
//     console.log(state[index]);
// }



// 9 print sum of all elments

// let marks=[90,65,39,41,83,89];
// let sum=0;
// for (let index=0;index<marks.length; index++){
//     sum+=marks[index];
// }
// console.log("sum is" ,sum);

// 10 print avrage of marks

// let marks=[90,65,39,41,83,89];
// let sum=0;
// for (let index=0;index<marks.length; index++){
//     sum+=marks[index];
// }
// console.log(sum/6);

//11 Use a loop to print numbers from 1 to 10.

// let num=1;
// for(let num=1; num<=10; num++)
// {
//     console.log(num);
//}

// 12 Using a loop, print all even numbers between 1 and 50.
// let num=1;
// for(num=1;num<=50;num++){
//     if(num%2==0){
//         console.log("number is even", num)
//     }
// }

// 13 find the largest number from an array

// const arr = [20, 10, 5, 100, 109, 29];
// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log("The largest number is:", largest);

// 14 find the smallest number from an array

// const arr = [20, 10, 5, 100, 109, 29];
// let smallest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }
// console.log("the smallest number is", smallest);

// 15 find the second largest number from an array

// const arr = [20, 10, 5, 100, 109, 29];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//     }
// }

// console.log("The largest number is:", largest);
//console.log("The second largest number is:", secondLargest);

// 16 check given student is present or not in array

// let students=["ram","shyam","rahul","raju","shubham"];
// let givenstudent="shyam";
// let flag=false;
// for(let i=0; i<students.length; i++){
//     if(students[i]===givenstudent){
//         flag=true;
//     }
// }
// if(flag===true){
//     console.log("student is present");
// }else{
//     console.log("student is not present");
// }

// 18 find given number is factorial or not
//5=1*2*3*4*5

// let number=7;
// let factorial=1;
// for(let i=1; i<=number;i++){
//     factorial*=i;
// }
// console.log("factorial is", factorial);

//19 find given number is prime or not
// divide by only itself and 1

// let num=11;
// let flag=true;  
// for(let i=2;i<num;i++){  
//     if(num% i== 0){  
//         flag=false;
//     }
// }
// if(flag==true){
//     console.log("number is not prime");
// }
// else{
//     console.log("number is prime");
// }    

// 20 print all the prime no 1 to 100
count=0 ;
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        }
    if (isPrime==true) {
        console.log(num);
        count=count+1;
    }
        } 
console.log("prime number=", count);

// for of=it is used with array
//let element of array
//let s of student


//for in=it is used with object


let number=8;
let factorial=1;
for(let i=1;i<=number;i++){
    factorial*=i;
}
console.log("factorial is" , factorial);


let arr=["rahuri","rahata","shirdi","kolhar"];
let taluka="pune";
let flag=true;
for(i=0;i<arr.length;i++){
    if(arr[i]===taluka){
        flag=false;
    }
   if(flag==false){
console.log("rahuri is present")
}
else{
    console.log("rahuri is not present");
}
}

// let array=[50,40,80,60,10];
// let larger=array[0];
// for(let i=1;i<array.length;i++){
//    if( array[i]>larger){
//     larger=array[i]
//    }
// }
// console.log("largets array is", larger);




// let number2=7;
// let isPrime=true;
// for(i=2;i<number2;i++){
//     if(number2% i==0){
//        isPrime=false;
//        break;
//     }
// }
//   if(isPrime==true){
// console.log("number is not prime");
//   }
//   else{
//     console.log("number is prime");
//   }
