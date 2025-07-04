// console.log(document.title);
// document.title= "Dom and Dom Manipulation";
// console.log(document.title);

// const h1=document.getElementById("my-h1");
// console.log(h1);
// alert("hello");
// h1.innerHTML="This is my h1";


// const para=document.getElementsByClassName("box");
// function changeColor() {
    // const userinput=prompt("enter something")
    // para.innerHTML=userinput;
    //para.classList.toggle("para");
    //}


    const para = document.getElementsByClassName("box")[0];
const colors = ["red", "blue", "green"];
let currentIndex = 0;

function changeColor() {
  currentIndex = (currentIndex + 1) % colors.length;
  para.style.backgroundColor = colors[currentIndex];
}

    
