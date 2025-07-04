//object = object is a colection of key value pair

let address={
    city:"pune",
    state:"maharashtra",
    pincode:132446,
}
console.log(address)

// to access key value pair
//1 dot notation
console.log(address.city);

//2 bracket notation

console.log(address["pincode"]);

//to update existing key valu pair

address.city="Ahilyanagar";
console.log(address);

//to add new key value pair

address.houseNo=564;
console.log(address);

//to delete key value pair

delete address.houseNo;
console.log(address);








//Strings=  a string is a sequence of characters used to represent text.

//1 toUpperCase()= to convert into uppercase

let username="rutuja";
 const uppercase=username.toUpperCase();
console.log(uppercase);

//2 toLowerCase()= to convert into lowercase

let country="INDIA";
console.log(country.toLocaleLowerCase());

// to count the length 
console.log(country.length);

// to acess the character using index
console.log(country[0]);



// 1 to print each character of a string on a new line 

let sentence="i love india";
for(let i=0;i<sentence.length;i++){
    console.log(sentence[i]);
}

// 2 reverse given string

let newString = "rutuja";
let reverseString = "";

for (let i = 0; i < newString.length; i++) {
    reverseString = newString[i] + reverseString;
}

console.log(reverseString);  // Output: "ajutur"

  
const sentence1="rutuja";
//split = a Converts a string into an array of substrings based on a separator.
const arr=sentence.split("");
    const reverseArr=arr.reverse();
//join=  Combines all elements of an array into a single string using a separator
    const reversString=reverseArr.join("");
console.log(reverseString)



//3 fibonecci series

let t1=0;
let t2=1;
for(let i=0;i<7;i++){
    let nextTerm=t1+t2;
    t1=t2;
    t2=nextTerm;
    console.log(nextTerm);
}



let oldstring="taharabad";
let reversestr="";
for(let i=0;i<oldstring.length;i++){
    reversestr=oldstring[i]+reversestr;
}
console.log(reversestr);