


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