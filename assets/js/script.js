

let buttons = document.querySelector(".btnn")
let images = document.querySelector(".image")
let icon = document.querySelector(".image i")


// buttons.addEventListener("click", function(){
//     images.classList.remove("d-none")
// })

buttons.addEventListener("click", function(){
    images.classList.toggle("d-none")
})


icon.addEventListener("click",function(){
    images.classList.add("d-none")
})

