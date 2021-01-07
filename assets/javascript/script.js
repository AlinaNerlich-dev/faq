let button = document.querySelectorAll("button");


button.forEach((item) => {
    item.addEventListener("click", e =>{
        const answer = e.target.nextElementSibling;
        const arrow = document.querySelector("button > img");

        if (answer.style.display === "none"){
            answer.style.display = "block";
            item.classList.add("active");
            arrow.classList.add("turn");
        } else{
            answer.style.display = "none";
            item.classList.remove("active");
            arrow.classList.remove("turn");  
        } 
        })
});


