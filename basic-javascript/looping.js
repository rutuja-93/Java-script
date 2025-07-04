// Lopping statements

// 1 for loop =it use when we know how many iteration used
//syntax for(initialization; condition ; updation)

for(let num=1; num<=10; num=num+1){
console.log("rutuja" +num)
}

// print all numbers from 1 to 100
for(let num=1; num<=100; num++){
    console.log(+num);
}


//print 0 to -100 numbers
for(let num=0; num>=-100; num--){
    console.log(+num)
}


//print odd number 1 to 50

for(let num=1; num<=50; num+=1){
    if(num%2==1){
    console.log(+num);
    }
}

//print 10 table

// for(let num=10; num<=100; num=num+10){
//     console.log(+num);
// }


for (let num=1; num<=10; num++){
    console.log(`10 x ${num}= ${num*10}`);
}

//break = used to stop th loop
//how to break from outer loop using break inside inner loop
//continue = to skip the current iteration


// 2 while loop =it use when we dont know how many iteration used
//  syntax=
//  initalization;
//  while(condition){
//task;
//updation;
//  }

 let num=1;
 while(num<=10){
    console.log(num);
    num++;
 }


 // 3 do while loop =when you have to execute code at least once is condition is true or not
//  syntax= initialization
//  do{
//     //task
//     updation
//  }while(condition);


// let num1=1;
// do{
//     console.log(num1);
//     num1++;
// }while(num1<=10)


    //labled loop =used to break outerloop from the inner loop


    
 

    