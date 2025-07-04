let h1=document.getElementById("number")
let count=0;
function decrease(){
    if(count==0){
        return;
    }
    count--
    h1.innerHTML=count;
}

function increase(){
    count++
    h1.innerHTML=count;

}