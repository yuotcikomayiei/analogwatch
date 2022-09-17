const secDiv = document.getElementById("second");
const minDiv = document.getElementById("minute");
const hourDiv = document.getElementById("hour");
setInterval(updateTime, 1000);
function updateTime(){
    const date = new Date();
    const sec = date.getSeconds() / 60;
    const min = (date.getMinutes() + sec) / 60;
    const hour = (date.getHours() + min) / 12;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}
updateTime();