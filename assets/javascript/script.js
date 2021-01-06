let button = document.querySelectorAll("button");


button.forEach((item) => {
    item.addEventListener("click", e =>{
        const answer = e.target.nextElementSibling;
         
        if (answer.style.display == "block"){
            answer.style.display = "none";
            item.classList.remove("active");  
        } else{
            answer.style.display = "block";
            item.classList.add("active");  
        } 
        })
});


/* <script>
      document.querySelectorAll(".accordion").forEach((item) => {
        item.addEventListener("click", (e) => {
          const panel = e.target.nextElementSibling;
          if (panel.style.display == "block") {
            panel.style.display = "none";
            e.target.classList.remove("accordion-active");
          } else {
            panel.style.display = "block";
            e.target.classList.add("accordion-active");
          }
        });
      });
    </script> */