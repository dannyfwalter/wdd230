console.log(Date.now());

const visit = document.querySelector("#visit");

const today = Date.now();

let last = Number(window.localStorage.getItem("LastVisited"));

const difference = today - last;

if (difference < 86400000) {
    visit.textContent = "0";
}
else {
    visit.textContent = Math.round(difference / 86400000);
}

console.log(difference);

localStorage.setItem("LastVisited", today);