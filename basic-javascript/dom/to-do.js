

//createElement=create a element using javascript

const input=document.getElementById("my-input")


function addpara(){
const para=document.createElement("p");

para.innerHTML= input.value;

//appendChild= adding single element at a time using js
//append= adding multiple element at a time using js

const parent=document.getElementById("box");

parent.appendChild(para);// add new element then we use append or appendChild otherwise we use innerHTML

}


function deletepara(){
    const parent=document.getElementById("box");
    const lastpara=parent.lastElementChild;
    if(lastpara)
    parent.removeChild(lastpara);
}
//remove=to remove single element, when you have the element and just want to remove it.
//removeChild=to remove child element, when you're already working with the parent and want to remove a specific child.