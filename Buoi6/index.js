let formbtn = document.getElementById("formbtn")
let form = document.getElementById("form")
let data = document.getElementById("data")
let result = document.getElementById("result")
let colorbtn = document.getElementsByClassName("colorbtn")

formbtn.addEventListener("click",function (){
    if(form.style.display == "none"){
        form.style.display = "block"
        formbtn.innerHTML = "Close Form"
    }else{
        form.style.display = "none"
        formbtn.innerHTML = "Show Form"
    }
})

data.addEventListener("keyup",function(){
    result.innerHTML = data.value
})

for (let i = 0; i < colorbtn.length; i++) {
    let btn = colorbtn[i]
    btn.addEventListener("click",function(){
        result.style.color = btn.getAttribute("data-color")
    })
}