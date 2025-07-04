// // //DOM[document object miodel]= tree like structure of content of our website



// // //how to select 
// // 1 id selector= used to select a single HTML element by its ID.
// // const selectedH1= document.getElementById("myh1");
// // console.log(selectedH1);


// // //2 using class= used to select one or more HTML elements that have the same class name.
// const para=document.getElementsByClassName("para");
// console.log(para)
// console.log(para[2]);//to select singlr para

//  //3 tag selector= used to select all HTML elements of a specific tag name like array

//  const paracollection= document.getElementsByTagName("p");
// console.log(paracollection);
// paracollection[1].textContent="this para is updated";//to update the 2nd para


// // 4 Query Selector= used to select the first matching HTML element using CSS-style selectors.
// // document.querySelector("#p")	= Element with id="p"
// //document.querySelector(".p")	= Element with class="p"
// //document.querySelector("p") = First <p> tag in the document

// const para1=document.querySelector("#myh1");
// console.log(para1);

// // //5 QuerySelectorAll=  used to select all matching HTML elements based on a CSS selector.
// const paras=document.querySelectorAll(".para");
// console.log(paras);






// // Dom Manipulation = DOM Manipulation is the process of changing the structure, style, or content of the HTML document using JavaScript after the page has loaded.

//  // how to change content :

// // 1 innerHTML= innerHTML is a JavaScript property that allows you to get or set the HTML content inside an element as a string.

// const selectedH1=document.getElementById("myh1")
// console.log(selectedH1.innerHTML);
// selectedH1.innerHTML=" Updated DOM 2"; //to change the content

// // 2 textContent= add text

// const selectedh1=document.getElementById("my1")
// console.log(selectedh1.textContent);
// selectedh1.textContent="updated h1 using text content";

// // //3 innerText= add text

// const selecth1=document.getElementById("myh1")
// console.log(selecth1.innerText);
// selecth1.innerText="updated h1 using inner text";


// // 1  when we click on button then html content will be change

// const content=document.getElementById("my1")
// function ChangeContent(){
//     const chnage=prompt("enter somthing");
//     selectedH1.innerHTML=chnage;

// }

// // 2 when we clixk on button then change the color

// const h1=document.getElementById("heading");
// function changeColor(){
//     h1.style.color="blue";

// }







//para.classList.add()
//.remove()
//.contains()
//.toggle()
const para=document.getElementById("para")
function changeStyles(){
    para.classList.toggle("my-para")
    para.innerHTML="this is cat";
}



const img=document.getElementById("img");
//attributr-->add, remove

//img.setAttribute("src","value");
//img.removeAttribute("src");
//img.getAttribute("src")-->it will return you value of attribute

function changeAttribute(){
    img.setAttribute("src","https://m.media-amazon.com/images/I/71rXvE8wHuL._AC_UF894,1000_QL80_.jpg")
}