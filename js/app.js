// Select all elements of interest
let modalBox = document.querySelector(".model-card");
let modal = document.querySelector(".model");
let body = document.body;
let emailField = document.querySelector(".model-email");
let submitBtn = document.querySelector("#submitBtn");
let closeBtn = document.querySelector(".exit"); 
let display = document.querySelector("#display");

window.addEventListener("scroll", (e) => { 
        const scrollable = document.documentElement.scrollHeight;
        const scrolled = scrollable - 1000;
        if (scrolled) {
            modalBox.style.display = "block";
        }
    });

    closeBtn.addEventListener("click", () => {
        modalBox.style.display = "none";
    })

submitBtn.addEventListener("click", (e) => { 
    e.preventDefault();  
    modal.innerHTML = "<h5 style='color: white'>Thanks for subscribing to our newsletter!</h5>";  
}); 