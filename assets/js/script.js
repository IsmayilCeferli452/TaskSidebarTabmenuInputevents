



let images = document.querySelectorAll(".slider-container .container img");

let icons = document.querySelectorAll(".slider-container .container .icons i");

icons.forEach(item => {
    item.addEventListener("click", function(){
        if(!images[0].classList.contains("d-none")){
            images[0].classList.add("d-none");
            images[0].style.display = "none";           
            images[1].classList.remove("d-none");
            images[1].style.display = "block"; 
        }else if(!images[1].classList.contains("d-none")){
            images[1].classList.add("d-none");
            images[1].style.display = "none";
            images[2].classList.remove("d-none");
            images[2].style.display = "block"; 
        }else if(!images[2].classList.contains("d-none")){
            images[2].classList.add("d-none");
            images[2].style.display = "none";
            images[0].classList.remove("d-none");
            images[0].style.display = "block"; 
        }
    })
});



