let button = document.querySelectorAll("button");
let answer = document.querySelectorAll(".answer");

button.forEach((item) => {
    item.addEventListener("click", e =>{
    item.classList.add("active");
        
    })
});







// let outputArea = document.querySelector("#output");

// document.querySelectorAll("button:not(#submit)").forEach((item) => {

//        item.addEventListener("click", (e) => {
//         outputArea.innerText += e.target.innerText;
//     });
// });