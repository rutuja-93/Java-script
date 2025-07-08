


// 1 define function

/*
const btn=document.getElementById("btn");
function dosomething(){
    alert("function is call");
   
}

btn.onclick=dosomething;
console.log(dosomething);
*/



// 2 function expresion
/*
const greet=function(){
   console.log("function expresion");
};
greet();
*/



// 3 arrow function

/*
const greet = () =>{
    console.log("arrow function");
}
greet();

*/



// addition of two numbers


/*
const add= (a,b, )=>{
  
    
    return a+b;
}
console.log(add(10 ,30));
*/



// 1 function declaration


function addition1(n1, n2)
{
    let sum=n1+n2;
    console.log("sum is", +sum);

}
addition1(12, 10);


// 2 function expresion

const add= function(a,b){
  
    let sum=a+b;
    console.log("sum is " +sum);
    return sum;
}
add(50 ,30);


// 3 arrow function


const addition= (no1, no2)=>{
    let sum=no1+no2;
    console.log("sum is" +sum);
    return sum;
}
addition(10, 30);




// 1 even number


const evenOdd= (num) =>{
    if(num%2==0){
        console.log("number is even " +num);
    }
    else{
        console.log("number is odd " +num)
    }
}
evenOdd(6);

// 2 square of number


const square= (x) =>{
    let ans= x * x;
    console.log("square is " +ans);
}
square(9);



// 3 multiplication table


const multiTable = (num) =>{
    for(let i=1; i<=10; i++){
            console.log( num*i);
    }
    
}
multiTable(12);



// 4 maximum of two numbers


const MaxNum= (n1, n2) =>{
    if(n1>n2){
        console.log("n1 is maximum " +n1);

    }
    else{
        console.log("n2 is maximum " +n2);
    }
}
MaxNum(123, 198);


// 5 Prime Number

const PrimeNum = (num) => {
    if (num <= 1) {
        console.log(num + " is not prime");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(num + " is not prime");
            return;
        }
    }

    console.log(num + " is prime");
};

PrimeNum(16);  
PrimeNum(7);  
