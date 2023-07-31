const button = document.querySelector("button");
const cancel = document.querySelector(".closeIcon");
const videoContainer = document.querySelector(".videoContainer");
const video = document.querySelector("video");
button.addEventListener("click" , () => {
    videoContainer.classList.remove("active");
});
cancel.addEventListener("click" , () => {
    videoContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});