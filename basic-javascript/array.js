// array is an indexed collection of data, 
//syntax: let arraynm = [];
//how will differntiate between:
//array and object--> Array.isArray()

let cities = ["pune","sangli", "satara", "kolhapur" ];
{
    console.log( "array before", cities);
    //how to add element in array
    cities[2]="Ahilyanagar";
    console.log("array after", cities);
    console.log(typeof cities);//typeof array is always object
    console.log(cities[2]);
    console.log(cities[-1]);//undefines
    console.log(cities.length)//count the element in array using .length  

    // to add element at the end of array
    cities.push("indore");
    console.log("after push", cities)

    // to delete element at the end of array
    cities.pop();
    console.log("after push", cities)

    // to add element at the start of array
    cities.unshift("shivajinagar")
    console.log("after unshift", cities)

// to delete elemnt at the start of array
  cities.shift();
  console.log("after shift", cities)
}

// to delete element at the middle
cities.splice(2,1);
console.log("after splice", cities);

// to add element at the middle
//        index,delete,add 
cities.splice(1,0,"mumbai");
console.log("after splice", cities);