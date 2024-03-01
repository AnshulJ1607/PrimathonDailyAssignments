const progress=document.getElementById("progress");
const circles=document.querySelectorAll(".circle");


const prev=document.getElementById("prev");
const nxt=document.getElementById("nxt");

let currentactive=1;
nxt.addEventListener('click',()=>{
    currentactive++
    if(currentactive>circles.length){
        currentactive = circles.length;

    }
    update();

})

function update(){
    circles.forEach((circle,idx) =>{
        if(idx < currentactive){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
    }) 
}
