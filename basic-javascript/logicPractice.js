function sum(num1, num2){
    const sum=num1+num2;
    console.log("sum is:" +sum);
}
sum(50,80);

//even odd

function EvenOdd(no){
    if(no%2==0){
        console.log("number is even");
    }else{
        console.log("numebr is odd");
    }
}
EvenOdd(9);


// largest of three numbers

function LargestNum(n1, n2, n3){
    let max=n1;
    if(n2>max){
        console.log("n2 is largest " +n2)
    }else if(n3>max){
        console.log("n3 is largest "+n3);
    }else{
        console.log("n1 is largest " +n1);
    }
}
LargestNum(96,20,90);



//simple calculator

function calculator(no1,no2){
    let operation=4
    

    switch(operation){

        case 1:  
        console.log("sum is" , no1+no2);break;
            
        case 2: 
        console.log("sub is", no1-no2);break

        case 3:   
        console.log("mul is", no1*no2);break

        case 4:  
        console.log("div is",no1/no2);break



    }

} calculator(8,2);


// print 1 to 10 number using loop


for(i=1;i<=10;i++){
    console.log(i);
}



//print multiplication table using for loop

let num=5;
for(let i=1;i<=10;i++){
    console.log(num*i);
}


// fatorial
let factorial=6;
let result=1;
for(i=1;i<=factorial;i++){
    result*=i;
}
console.log(result)



//sum of degit


function SumOfDigit(n){
    let sum1=0;
    while(n>0){
        let digit=n%10
        sum1+=digit;
        n=parseInt(n/10);
    }
    return sum1;
}
let result1=SumOfDigit(3453);
console.log("sum of digit ", result1);



//reverse Number


function Reverse(n){
    let reverse=0;
    while(n>0){
        let digit=n%10;
        reverse=reverse*10+digit;
        n=parseInt(n/10);
    }
    return reverse;
}
let result12=Reverse(876);
console.log("reverse is", result12);


//print sum of all elments using array


let marks=[20,60, 50,40];
let summ=0;
for(let i=0; i<marks.length;i++){
         summ+=marks[i];
}
console.log("sum is", summ);


// avg of marks

let mark=[20,60, 50,40,90];
let avg=0;
for(let i=0; i<mark.length;i++){
         avg+=mark[i];
}
console.log("avg is is", avg/mark.length);




// 13 find the largest number from an array

let arr=[30,95,90,20,80];
let largest=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
}
}
console.log("largest no is" ,largest);

////  find the smalest number from an array

let arr1=[60,10,80,5,20];
let smallest=arr1[0];
for(let i=1;i<arr1.length;i++){
    if(arr1[i]<smallest){
    smallest=arr1[i];
}
}
console.log("smallest number is", smallest);



//Check given student is present or not

let students=["ram","shyam","shiv","raju","krish"];
let givenstudent="krishna";
let flag=false;

for(let i=0;i<=students.length;i++){
    if(givenstudent===students[i]){
        flag=true;
    }
}
if(flag==true){
    console.log("given student is present", givenstudent);
}else{
    console.log("given students is not present", givenstudent);
}



// check factorial
let no=6;
let factoriall=1;
for(let i=1;i<=no;i++){
    factoriall*=i;
}
console.log("factorial is", factoriall);


// check no is prime
let num1=21;
let isPrime=false;
for(let i=2;i<=num1/2;i++){
    if(num1%i==0){
        isPrime=true;
    }
}
if(isPrime){
    console.log("is not prime numner", num1);
}else{
    console.log("is prime numer", num1);
}