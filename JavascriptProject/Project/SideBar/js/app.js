const showSideBar = document.querySelector(".bi-layout-sidebar-inset-reverse");
const hideSideBar = document.querySelector(".bi-x-circle");
const container = document.querySelector(".container");

showSideBar.addEventListener("click" , (event) => {
    container.classList.add("showSideBar")
    event.preventDefault();
})

hideSideBar.addEventListener("click" , (event) => {
    container.classList.remove("showSideBar")
    event.preventDefault();
})