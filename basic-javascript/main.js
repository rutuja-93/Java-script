// 1 number datatype
let age= 34;
console.log(age);
age= 35;
console.log(typeof age);
console.log(typeof 11.32)

// 2 bigint datatype
console.log(typeof 1324536n)

// 3 boolean datatype
console.log(typeof true)

console.log(typeof TRUE)

// 4 string dataype
let name="Rutuja";
console.log(name);
console.log(typeof name)

// 5 undefine datatype
let college;
console.log(typeof college)

// 6 null datatype
let address=null;
console.log(typeof null)

// 7 symbol datatype
const uniquevalue= Symbol("description");
console.log(typeof uniquevalue)

//non-primitive datatype: object, array , function
// 8 object datatype(non-primitive datatype)
let person={name:"rutuja",
    age:20,
};
console.log(person.name)
console.log(typeof person.age)