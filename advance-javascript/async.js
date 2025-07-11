// setTimeout = Executes a function once after a delay.



console.log("A");

setTimeout(()=>{
    console.log("B");
}, 3000);

console.log("C")



// setInterval = Repeats a function execute until stopped.


// console.log("Task 1");

// setInterval(()=>{
//     console.log("Task 2");
// }, 3000);
// console.log("Task 3");


// promise is a object
// resolve
// reject

const p1 = new Promise((resolve, reject)=>{
    resolve("promise is resolved");
});
console.log(p1);




//
const p2 =new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("promise is rejected")
    }, 5000)
})

p2
.then(() => console.log("ABCD")) 
.catch(() => console.log("XYZ"));








// 
function sendReq(url){
    const p= new Promise((resolve, reject) =>{
        setTimeout(()=>{
resolve ("promise is resolved");
        },5000)
    })
    return p;
}
const p4 =sendReq("www.google.com");

p4
.then((data) => {console.log(data)})
.catch((error) => console.log(error));









