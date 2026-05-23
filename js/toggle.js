const faqContainer = document.getElementById("faq-section");
faqContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("fa-plus")){
        const element = event.target.parentElement.parentElement;
        console.log(element);
        const p = element.querySelector("p");
        p.style.display = "block";
        const minusBtn = element.querySelector(".fa-minus");
        minusBtn.style.display = "block";
        const plusBtn = element.querySelector(".fa-plus");
        plusBtn.style.display = "none";
        
    } else if(event.target.classList.contains("fa-minus")){
        const element = event.target.parentElement.parentElement;
        console.log(element);
        const p = element.querySelector("p");
        p.style.display = "none";
        const minusBtn = element.querySelector(".fa-minus");
        minusBtn.style.display = "none";
        const plusBtn = element.querySelector(".fa-plus");
        plusBtn.style.display = "block";
    }
})