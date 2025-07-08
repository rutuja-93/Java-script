const marks=[20,70,50,60,30,75];


/*
console.log(typeof marks);
for(let i=0;i<marks.length;i++){
console.log(marks[i]);
}  
*/

// 1 for of ---->array

for(let m of marks){
console.log(m);
}



//2 foreach

marks.forEach(print);
function print(value){
    console.log("for each marks", value);
}


marks.forEach((value)=>{
console.log("using arroy" ,value);
});



/*
array functions :
pop----> delete last element            return ---->deleetd element
push----->add element last              return----->new length
shift------>delete first element        return------>deleted element
unshift------>add first element         return------>new length
splice----->add or delete element where ever we want        return---------->array of deleted elements
*/







//functions :

//1 at = used to retrive elements
console.log(marks.at(2));

//2 includes = search elements will returns boolean
console.log(marks.includes(10));

//3 join = adds all the elements of an array into a string, separated
const name=["a","b","c","d"];
console.log(name.join("="));

//4 slice = returns a copy of a section of an array
const slice=marks.slice(2,5);
console.log(slice);

//5 reverse = will reverse aray
console.log(marks);
console.log(marks.reverse());

//6 sort = it sort elements (alphabetically)

const names=["u", "t","d","e","h","y"];
console.log(names.sort());























