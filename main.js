let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000)

const dateElement = document.querySelector(".date");

function formateDate(date) {
    const DAYS = ["Sunday", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const MONTHS = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    return `${DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}

setInterval(() => {
    const now = new Date();

    dateElement.textContent = formateDate(now);
}, 200)