// first way to handling events
//elemeny.onclick=dosomething;


// const button=document.getElementById("btn");

// button.onclick=dosomething;// using this we can call function without html

// function dosomething(){
//     console.log("function is call");
// }



//second way to handling event
//element.addEventListener("click", function)

const div=document.getElementById("box");
document.addEventListener("mousemove",handleMouseMove);

function handleMouseMove(eventObj){
    div.style.top=eventObj.clientY + "px";
    div.style.left=eventObj.clientX + "px";
}

