"use strich";
let menu = document.querySelector(".header__menu");

document.addEventListener("click",function(e){
    console.log(e.target.className);
    if(e.target.className == "header__menu"){
        document.querySelector(".header__nav").classList.add("active");
    }
    if(e.target.className == "close"){
        document.querySelector(".header__nav").classList.remove("active");
    }
    
})
