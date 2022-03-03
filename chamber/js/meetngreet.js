const day = new Date();
const meetngreet = document.getElementsByClassName("meet");

if (day.getDay() == 1 || day.getDay() == 2) {
    meetngreet.style.display = "block";
}