const greet=function(){
    console.log("Good Morning");
}
const person={
    name: "rutuja" ,
    city: "rahuri" ,
    greet: function(){
        console.log("Good Morning" , this.name, "I am From", this.city);
    }
}
person.greet();