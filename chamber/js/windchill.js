let t = document.querySelector("#temp").textContent;
let s = document.querySelector("#wind").textContent;
let windChill = "";

if (t <= 50 && s > 3) {
    windChill = getWindChill(t, s);
    console.log(windChill);
}
else {
    windChill = "N/A";
}

document.querySelector("#chill").textContent = windChill;

function getWindChill (temp, wind) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(s, .16)) + (0.4275 * t * (Math.pow(s, .16)));
}