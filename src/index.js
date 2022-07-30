/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city");
let correctCity = city.toLowerCase();
let flag = false;
for (let prop in weather) {
  if (correctCity === prop) {
    alert(
      "It is currently " +
        +Math.round(weather[correctCity].temp) +
        "°C (" +
        Math.round((weather[correctCity].temp * 9) / 5 + 32) +
        "°F) in " +
        city +
        " with a humidity of " +
        weather[correctCity].humidity
    );
    flag = true;
  }
}
if (flag === false) {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
      correctCity
  );
}*/
let data = new Date();
let dat = document.querySelector(".date");
let day = data.getDay();
let hour = data.getHours();
let minutes = data.getMinutes();
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let min = "0";
if (minutes < 10) {
  min = "0" + minutes;
} else {
  min = minutes;
}

function ok() {
  let info = document.querySelector(".city");
  let town = document.querySelector(".town");
  let a = info.value;
  town.innerHTML = a;
  let city = a.toLowerCase();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
dat.innerHTML = `${weekday[day]} ${hour}:${min}`;
let search = document.querySelector("form");
search.addEventListener("submit", ok);
function cel() {
  let i = document.querySelector(".gra");
  i.innerHTML = "29";
}
function far() {
  let i = document.querySelector(".gra");
  i.innerHTML = Math.round((29 * 9) / 5 + 32);
}
let c = document.querySelector(".cel");
let f = document.querySelector(".far");
c.addEventListener("click", cel);
f.addEventListener("click", far);

function showTemperature(response) {
  let temperature = response.data.main.temp;
  let i = document.querySelector(".gra");
  i.innerHTML = temperature;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
