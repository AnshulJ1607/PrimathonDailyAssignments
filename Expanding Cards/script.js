const panels =document.querySelectorAll('.panel');

function removeActiveClasses(){
    panels.forEach(x=>{
        x.classList.remove('active')
    })
}

panels.forEach(x=>{
    x.addEventListener('click',()=>{
        removeActiveClasses()
        x.classList.add('active')
    })
})

