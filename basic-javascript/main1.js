// arithmatic operators
// 1 addition
const num1 =20;
const num2 =30;
const addition=num1+num2;
console.log("addition is",addition);

// 2 substraction
const subs= num1-num2;
console.log("substraction is",subs);

// 3 multiplication
const mult=num1*num2;
console.log("multiplication",mult);

// 4 division
const div = num2/num1;
console.log("division is",div);
console.log(div);

// 5 modulo
console.log(10%50);

// 6 exponent
console.log(8**2);



// comparision operators
// 1 less than
const no1=10;
const no2=50
console.log(no1<no2);

// 2 greater than
console.log(no1>no2);

// 3 less than and eqal too
console.log(no1<=no1);

// 4 greater than and eqal too
console.log(no1>=no2);

console.log("A"<"a");


// eqality operator
// 1 double equal too / equal-equal too
console.log(10==20);
console.log("rutuja"=="rutuja");
 console.log("10"==10);//true
 console.log("10"===10);//false

// number -->16 digit 
console.log(98765432109876552==98765432109876551);//true
console.log(98765432109876552==98765432109876551n);//false

// 2 not equal too
console.log(10!=10);//false
console.log(10!=20);//true

// increament & decreament
// 1 increament
// post increament
 let no=2;
 console.log("no before increament",no++);
 console.log("no after increament",no)

 //pre increament
 console.log(++no);

 //2 decreament
 // post decreament
 console.log(no--)
 console.log("after post decreament",no--);

 //pre decreament
 console.log("after pre decreament",--no);


 //logical operator
// 1 AND
 console.log(true&&true);//true
 console.log(true&&false);
 console.log(false&&true);
 console.log(false&&false);

 let age=29;
 let gender="male";
 console.log(age>=19 && gender==="male");

 // 2 OR
 console.log(true||true);
 console.log(true||false);
 console.log(false||true);
 console.log(false||false);//false

 // 3 NOT

 console.log(!true);//false
 console.log(!false);//true

 // ternary operators
// syntax= condition ? code if true : code if false;
 let age1=29;
 age1>=18 ? console.log("you can vot") : console.log("you can no tvote");



//  compound assignment operators
//(+=,-+,*=,/=,%=,**=)
age*=5;//age=age*5 =25
  

// short circuit operators
// &, |, ~


//  String Concatination
let firstname= "rutuja";
let city= "pune";
let sentence= " my name is " +  firstname + " I live in " + city;
let sentence1 = ` my name is ${firstname} I live in ${city}`;
console.log(sentence);
console.log(sentence1);