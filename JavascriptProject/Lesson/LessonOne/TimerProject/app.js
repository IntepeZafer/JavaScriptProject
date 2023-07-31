const clock = document.querySelector(".clock");
const tick = () => {
    const newDate = new Date();
    const Hourse = newDate.getHours();
    const Minutes = newDate.getMinutes();
    const Seconds = newDate.getSeconds();
    clock.innerHTML = `
        <span>${Hourse}</span> :
        <span>${Minutes}</span> :
        <span>${Seconds}</span>
    `;
}
setInterval(() => {
    tick();
},1000)

