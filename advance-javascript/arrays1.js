// filter() = to filter out elements, it will return you new filtered array



const numbers = [10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(num => num % 2 === 0); 
console.log(evenNumbers);


//.map() = creates a new array by applying a function to each element.


const number = [1, 2, 3, 4];
const squares = number.map(num => num*num);
console.log(squares); // [1, 4, 9, 16]



// 1 From given array create another array which include  element greater than 20
const arr = [12, 44, 64, 66, 7, 21, 23, 54, 5];
const newarr= arr.filter(num=>num>20);
console.log(newarr);


// 2  add 5 in every element and create new array

const arr1 = [12, 44, 64, 66, 7, 21, 23, 54, 5];   
const newArr=arr.map(number=>number+5);
console.log(newArr);

// 3 Convert an array of strings to uppercase.
const words = ["hello", "world", "javascript"];

const convertupper=words.map(words=>words.toUpperCase());
console.log(convertupper);


// 4 Given an array of objects with price and quantity, return an array with total prices (price * quantity).
const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 5 },
    { price: 8, quantity: 3 }
];

const total=items.map(item=>item.price * item.quantity);
console.log(total);


// 5 Given an array of objects representing students, return only the students who passed (marks >= 40).
const students = [
    { name: "John", marks: 35 },
    { name: "Alice", marks: 50 },
    { name: "Bob", marks: 40 },
    { name: "Emma", marks: 30 }
];
const passeStudents = students.filter(students=>students.marks>=40);
console.log(passeStudents);