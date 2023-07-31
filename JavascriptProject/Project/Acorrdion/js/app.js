const acordions = document.querySelectorAll(".acordions");
acordions.forEach((acordion) => {
    const accordionButton = acordion.querySelector(".accordionButton");
    accordionButton.addEventListener("click" , (event) => {
        acordion.querySelector(".dash").classList.toggle("active");
        acordion.querySelector(".plus").classList.toggle("active");
        acordion.querySelector(".text").classList.toggle("active");
    })
})