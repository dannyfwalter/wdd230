const dayToday = new Date();

let options = {
  weekday: 'long'
  , year: 'numeric'
	, month: 'long'
	, day: 'numeric'
};

document.getElementById("todaysDate").textContent = new Date().toLocaleDateString("en-US", options);