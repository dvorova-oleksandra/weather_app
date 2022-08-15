
//Connection with Api
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
//Founding city 
let search = document.querySelector("form");
let info = document.querySelector(".city");
search.addEventListener("submit", finding_city);
//Date 
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
dat.innerHTML = `${weekday[day]} ${hour}:${min}`;
let b1 = ["Use suncream and enjoy the sun", "Eat icecream", "Go to pool or lake"]
let b2 = ["Drink lemonade", "Eat icecream", "Smile"]
let b3 = ["Enjoy the sun, but not forget about temperature", "Find time for cup of tea"]
let b4 = ["Use warm clothes", "Find time for cup of coffee"]
let b5 = ["Day for sitting in home", "Not forget about safety rules"]
let b6 = ["Time for making snowman", "Just have fun with snow"]
let b7 = ["Time for reading book", "Not forget an umbrella"]
//Get local position
function local() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
//Random number 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//Get info about location tempeture
function retrievePosition(position) {
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
axios.get(url).then(yourLocal);
}
//Show your location and temperute 
function yourLocal(response) {
let town = document.querySelector(".town");
town.innerHTML = `${response.data.name}`;
let temperature = response.data.main.temp;
let i = document.querySelector(".gra");
i.innerHTML = Math.round(temperature);
let svge = document.querySelector(".weather")
let main_icon = document.querySelector(".main_img")
svge.removeAttribute("viewBox");
main_icon.removeAttribute("d");
let current_weather = response.data.weather[0].description;
let current= response.data.weather[0].main;
if (current_weather==="	broken clouds"|| current_weather==="overcast clouds"||current_weather==="scattered clouds")
{
  svge.setAttribute("viewBox", "0 0 640 512");
  main_icon.setAttribute("d", "M96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1z")
}
else if (current_weather==="few clouds")
{
  svge.setAttribute("viewBox", "0 0 640 512");
  main_icon.setAttribute("d", "M96 208c0-61.86 50.14-111.1 111.1-111.1c52.65 0 96.5 36.45 108.5 85.42C334.7 173.1 354.7 168 375.1 168c4.607 0 9.152 .3809 13.68 .8203l24.13-34.76c5.145-7.414 .8965-17.67-7.984-19.27L317.2 98.78L301.2 10.21C299.6 1.325 289.4-2.919 281.9 2.226L208 53.54L134.1 2.225C126.6-2.92 116.4 1.326 114.8 10.21L98.78 98.78L10.21 114.8C1.326 116.4-2.922 126.7 2.223 134.1l51.3 73.94L2.224 281.9c-5.145 7.414-.8975 17.67 7.983 19.27L98.78 317.2l16.01 88.58c1.604 8.881 11.86 13.13 19.27 7.982l10.71-7.432c2.725-35.15 19.85-66.51 45.83-88.1C137.1 309.8 96 263.9 96 208zM128 208c0 44.18 35.82 80 80 80c9.729 0 18.93-1.996 27.56-5.176c7.002-33.65 25.53-62.85 51.57-83.44C282.8 159.3 249.2 128 208 128C163.8 128 128 163.8 128 208zM575.2 325.6c.125-2 .7453-3.744 .7453-5.619c0-35.38-28.75-64-63.1-64c-12.62 0-24.25 3.749-34.13 9.999c-17.62-38.88-56.5-65.1-101.9-65.1c-61.75 0-112 50.12-112 111.1c0 3 .7522 5.743 .8772 8.618c-49.63 3.75-88.88 44.74-88.88 95.37C175.1 469 218.1 512 271.1 512h272c53 0 96-42.99 96-95.99C639.1 373.9 612.7 338.6 575.2 325.6z")
}
else if (current_weather==="clear sky")
{
  svge.setAttribute("viewBox", "0 0 512 512");
  main_icon.setAttribute("d", "M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z")
}
else if(current==="Mist"||current==="Smoke"||current==="Haze"||current==="Dust"||current==="Fog"||current==="Sand"||current==="Ash"||current==="Squall"||current==="Tornado")
{
  svge.setAttribute("viewBox", "0 0 640 512");
  main_icon.setAttribute("d", "M144 288h156.1C322.6 307.8 351.8 320 384 320s61.25-12.25 83.88-32H528C589.9 288 640 237.9 640 176s-50.13-112-112-112c-18 0-34.75 4.625-49.75 12.12C453.1 30.1 406.8 0 352 0c-41 0-77.75 17.25-104 44.75C221.8 17.25 185 0 144 0c-79.5 0-144 64.5-144 144S64.5 288 144 288zM136 464H23.1C10.8 464 0 474.8 0 487.1S10.8 512 23.1 512H136C149.2 512 160 501.2 160 488S149.2 464 136 464zM616 368h-528C74.8 368 64 378.8 64 391.1S74.8 416 87.1 416h528c13.2 0 24-10.8 24-23.1S629.2 368 616 368zM552 464H231.1C218.8 464 208 474.8 208 487.1S218.8 512 231.1 512H552c13.2 0 24-10.8 24-23.1S565.2 464 552 464z")
}
else if(current==="Snow"||current_weather==="freezing rain")
{
  svge.setAttribute("viewBox", "0 0 512 512");
  main_icon.setAttribute("d", "M475.6 384.1C469.7 394.3 458.9 400 447.9 400c-5.488 0-11.04-1.406-16.13-4.375l-25.09-14.64l5.379 20.29c3.393 12.81-4.256 25.97-17.08 29.34c-2.064 .5625-4.129 .8125-6.164 .8125c-10.63 0-20.36-7.094-23.21-17.84l-17.74-66.92L288 311.7l.0002 70.5l48.38 48.88c9.338 9.438 9.244 24.62-.1875 33.94C331.5 469.7 325.4 472 319.3 472c-6.193 0-12.39-2.375-17.08-7.125l-14.22-14.37L288 480c0 17.69-14.34 32-32.03 32s-32.03-14.31-32.03-32l-.0002-29.5l-14.22 14.37c-9.322 9.438-24.53 9.5-33.97 .1875c-9.432-9.312-9.525-24.5-.1875-33.94l48.38-48.88L223.1 311.7l-59.87 34.93l-17.74 66.92c-2.848 10.75-12.58 17.84-23.21 17.84c-2.035 0-4.1-.25-6.164-.8125c-12.82-3.375-20.47-16.53-17.08-29.34l5.379-20.29l-25.09 14.64C75.11 398.6 69.56 400 64.07 400c-11.01 0-21.74-5.688-27.69-15.88c-8.932-15.25-3.785-34.84 11.5-43.75l25.96-15.15l-20.33-5.508C40.7 316.3 33.15 303.1 36.62 290.3S53.23 270 66.09 273.4L132 291.3L192.5 256L132 220.7L66.09 238.6c-2.111 .5625-4.225 .8438-6.305 .8438c-10.57 0-20.27-7.031-23.16-17.72C33.15 208.9 40.7 195.8 53.51 192.3l20.33-5.508L47.88 171.6c-15.28-8.906-20.43-28.5-11.5-43.75c8.885-15.28 28.5-20.44 43.81-11.5l25.09 14.64L99.9 110.7C96.51 97.91 104.2 84.75 116.1 81.38C129.9 77.91 142.1 85.63 146.4 98.41l17.74 66.92L223.1 200.3l-.0002-70.5L175.6 80.88C166.3 71.44 166.3 56.25 175.8 46.94C185.2 37.59 200.4 37.72 209.8 47.13l14.22 14.37L223.1 32c0-17.69 14.34-32 32.03-32s32.03 14.31 32.03 32l.0002 29.5l14.22-14.37c9.307-9.406 24.51-9.531 33.97-.1875c9.432 9.312 9.525 24.5 .1875 33.94l-48.38 48.88L288 200.3l59.87-34.93l17.74-66.92c3.395-12.78 16.56-20.5 29.38-17.03c12.82 3.375 20.47 16.53 17.08 29.34l-5.379 20.29l25.09-14.64c15.28-8.906 34.91-3.75 43.81 11.5c8.932 15.25 3.785 34.84-11.5 43.75l-25.96 15.15l20.33 5.508c12.81 3.469 20.37 16.66 16.89 29.44c-2.895 10.69-12.59 17.72-23.16 17.72c-2.08 0-4.193-.2813-6.305-.8438L379.1 220.7L319.5 256l60.46 35.28l65.95-17.87C458.8 270 471.9 277.5 475.4 290.3c3.473 12.78-4.082 25.97-16.89 29.44l-20.33 5.508l25.96 15.15C479.4 349.3 484.5 368.9 475.6 384.1z")
}
else if(current="Drizzle"||current_weather==="ragged shower rain"||current_weather==="heavy intensity shower rain"||current_weather==="shower rain"||current_weather==="light intensity shower rain")
{
  svge.setAttribute("viewBox", "0 0 512 512");
  main_icon.setAttribute("d", "M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112c0-44.25-35.75-80-79.1-80c-24.62 0-46.25 11.25-60.1 28.75C256.4 24.75 219.3 0 176 0C114.3 0 64 50.13 64 112c0 7.25 .7512 14.25 2.126 21.25C27.76 145.8 .0054 181.5 .0054 224c0 53 42.1 96 95.1 96h319.1C469 320 512 277 512 224S469 128 416 128zM198.8 353.9c-12.17-5.219-26.3 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C134.1 511.4 138.2 512 141.3 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C216.6 373.3 210.1 359.2 198.8 353.9zM81.46 353.9c-12.19-5.219-26.3 .4062-31.52 12.59l-47.1 112C-3.276 490.7 2.365 504.8 14.55 510.1C17.63 511.4 20.83 512 23.99 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C99.29 373.3 93.64 359.2 81.46 353.9zM316.1 353.9c-12.19-5.219-26.3 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C252.3 511.4 255.5 512 258.7 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C333.1 373.3 328.3 359.2 316.1 353.9zM433.5 353.9c-12.17-5.219-26.28 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C369.6 511.4 372.8 512 375.1 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C451.3 373.3 445.6 359.2 433.5 353.9z")
}
else if(current_weather==="extreme rain"||current_weather==="very heavy rain"||current_weather==="heavy intensity rain"||current_weather==="moderate rain"||current_weather==="light rain")
{
  svge.setAttribute("viewBox", "0 0 512 512");
  main_icon.setAttribute("d", "M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM368 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S368 437.5 368 464zM48 464C48 490.5 69.49 512 96 512s48-21.49 48-48s-48.01-95.1-48.01-95.1S48 437.5 48 464zM208 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S208 437.5 208 464z")
}
else if(current="Thunderstorm")
{
  svge.setAttribute("viewBox", "0 0 512 512");
  main_icon.setAttribute("d", "M352 351.1h-71.25l47.44-105.4c3.062-6.781 1.031-14.81-4.906-19.31c-5.969-4.469-14.22-4.312-19.94 .4687l-153.6 128c-5.156 4.312-7.094 11.41-4.781 17.72c2.281 6.344 8.281 10.56 15.03 10.56h71.25l-47.44 105.4c-3.062 6.781-1.031 14.81 4.906 19.31C191.6 510.9 194.1 512 198.4 512c3.656 0 7.281-1.25 10.25-3.719l153.6-128c5.156-4.312 7.094-11.41 4.781-17.72C364.8 356.2 358.8 351.1 352 351.1zM416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h46.63l140.2-116.8c8.605-7.195 19.53-11.16 30.76-11.16c10.34 0 20.6 3.416 29.03 9.734c17.96 13.61 24.02 37.45 14.76 57.95L330.2 320H416c53 0 96-43 96-96S469 128 416 128z")
}
let now = document.querySelector(".now")
now.innerHTML=response.data.weather[0].main;
let procent = document.querySelector(".procent");
procent.innerHTML = response.data.main.humidity;
let wind = document.querySelector(".wind");
wind.innerHTML = response.data.wind.speed
let advice = document.querySelector(".advice")
if (current_weather==="clear sky" && temperature>=24)
{
  advice.innerHTML = b1[getRandomInt(3)];
}
else if (current==="Clouds"&& temperature>=24)
{
  advice.innerHTML = b2[getRandomInt(3)];
}
else if (current="Thunderstorm")
{
  advice.innerHTML = b5[getRandomInt(2)];
}
else if (current_weather==="clear sky" && temperature<24)
{
  advice.innerHTML = b3[getRandomInt(2)];
}
else if (current==="Clouds"&& temperature<24)
{
  advice.innerHTML = b4[getRandomInt(2)];
}
else if (current==="Snow")
{
  advice.innerHTML = b6[getRandomInt(2)];
}
else if (current==="Rain"||"Drizzle")
{
  advice.innerHTML = b7[getRandomInt(2)];
}
else if (current==="Mist"||current==="Smoke"||current==="Haze"||current==="Dust"||current==="Fog"||current==="Sand"||current==="Ash"||current==="Squall"||current==="Tornado")
{
  advice.innerHTML = "Be carefull"
}
else
{
  advice.innerHTML = "Just enjoy time"
}
}

//Changing city 
function finding_city() {
  let city = info.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
//Show in Cel
function cel() {
  let i = document.querySelector(".gra");
  i.innerHTML = "16";
}
//Show in far 
function far() {
  let i = document.querySelector(".gra");
  i.innerHTML = Math.round((29 * 9) / 5 + 32);
}
//Show temperature in finding city and another info about weather
 function showTemperature(response) {
  alert(start)
  let town = document.querySelector(".town");
  town.innerHTML = info.value;
  let temperature = response.data.main.temp;
  let i = document.querySelector(".gra");
  i.innerHTML = Math.round(temperature);
  let svge = document.querySelector(".weather")
  let main_icon = document.querySelector(".main_img")
  svge.removeAttribute("viewBox");
  main_icon.removeAttribute("d");
  let current_weather = response.data.weather[0].description;
  let current= response.data.weather[0].main;
  if (current_weather==="	broken clouds"|| current_weather==="overcast clouds"||current_weather==="scattered clouds")
  {
    svge.setAttribute("viewBox", "0 0 640 512");
    main_icon.setAttribute("d", "M96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1z")
  }
  else if (current_weather==="few clouds")
  {
    svge.setAttribute("viewBox", "0 0 640 512");
    main_icon.setAttribute("d", "M96 208c0-61.86 50.14-111.1 111.1-111.1c52.65 0 96.5 36.45 108.5 85.42C334.7 173.1 354.7 168 375.1 168c4.607 0 9.152 .3809 13.68 .8203l24.13-34.76c5.145-7.414 .8965-17.67-7.984-19.27L317.2 98.78L301.2 10.21C299.6 1.325 289.4-2.919 281.9 2.226L208 53.54L134.1 2.225C126.6-2.92 116.4 1.326 114.8 10.21L98.78 98.78L10.21 114.8C1.326 116.4-2.922 126.7 2.223 134.1l51.3 73.94L2.224 281.9c-5.145 7.414-.8975 17.67 7.983 19.27L98.78 317.2l16.01 88.58c1.604 8.881 11.86 13.13 19.27 7.982l10.71-7.432c2.725-35.15 19.85-66.51 45.83-88.1C137.1 309.8 96 263.9 96 208zM128 208c0 44.18 35.82 80 80 80c9.729 0 18.93-1.996 27.56-5.176c7.002-33.65 25.53-62.85 51.57-83.44C282.8 159.3 249.2 128 208 128C163.8 128 128 163.8 128 208zM575.2 325.6c.125-2 .7453-3.744 .7453-5.619c0-35.38-28.75-64-63.1-64c-12.62 0-24.25 3.749-34.13 9.999c-17.62-38.88-56.5-65.1-101.9-65.1c-61.75 0-112 50.12-112 111.1c0 3 .7522 5.743 .8772 8.618c-49.63 3.75-88.88 44.74-88.88 95.37C175.1 469 218.1 512 271.1 512h272c53 0 96-42.99 96-95.99C639.1 373.9 612.7 338.6 575.2 325.6z")
  }
  else if (current_weather==="clear sky")
  {
    svge.setAttribute("viewBox", "0 0 512 512");
    main_icon.setAttribute("d", "M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z")
  }
  else if(current==="Mist"||current==="Smoke"||current==="Haze"||current==="Dust"||current==="Fog"||current==="Sand"||current==="Ash"||current==="Squall"||current==="Tornado")
  {
    svge.setAttribute("viewBox", "0 0 640 512");
    main_icon.setAttribute("d", "M144 288h156.1C322.6 307.8 351.8 320 384 320s61.25-12.25 83.88-32H528C589.9 288 640 237.9 640 176s-50.13-112-112-112c-18 0-34.75 4.625-49.75 12.12C453.1 30.1 406.8 0 352 0c-41 0-77.75 17.25-104 44.75C221.8 17.25 185 0 144 0c-79.5 0-144 64.5-144 144S64.5 288 144 288zM136 464H23.1C10.8 464 0 474.8 0 487.1S10.8 512 23.1 512H136C149.2 512 160 501.2 160 488S149.2 464 136 464zM616 368h-528C74.8 368 64 378.8 64 391.1S74.8 416 87.1 416h528c13.2 0 24-10.8 24-23.1S629.2 368 616 368zM552 464H231.1C218.8 464 208 474.8 208 487.1S218.8 512 231.1 512H552c13.2 0 24-10.8 24-23.1S565.2 464 552 464z")
  }
  else if(current==="Snow"||current_weather==="freezing rain")
  {
    svge.setAttribute("viewBox", "0 0 512 512");
    main_icon.setAttribute("d", "M475.6 384.1C469.7 394.3 458.9 400 447.9 400c-5.488 0-11.04-1.406-16.13-4.375l-25.09-14.64l5.379 20.29c3.393 12.81-4.256 25.97-17.08 29.34c-2.064 .5625-4.129 .8125-6.164 .8125c-10.63 0-20.36-7.094-23.21-17.84l-17.74-66.92L288 311.7l.0002 70.5l48.38 48.88c9.338 9.438 9.244 24.62-.1875 33.94C331.5 469.7 325.4 472 319.3 472c-6.193 0-12.39-2.375-17.08-7.125l-14.22-14.37L288 480c0 17.69-14.34 32-32.03 32s-32.03-14.31-32.03-32l-.0002-29.5l-14.22 14.37c-9.322 9.438-24.53 9.5-33.97 .1875c-9.432-9.312-9.525-24.5-.1875-33.94l48.38-48.88L223.1 311.7l-59.87 34.93l-17.74 66.92c-2.848 10.75-12.58 17.84-23.21 17.84c-2.035 0-4.1-.25-6.164-.8125c-12.82-3.375-20.47-16.53-17.08-29.34l5.379-20.29l-25.09 14.64C75.11 398.6 69.56 400 64.07 400c-11.01 0-21.74-5.688-27.69-15.88c-8.932-15.25-3.785-34.84 11.5-43.75l25.96-15.15l-20.33-5.508C40.7 316.3 33.15 303.1 36.62 290.3S53.23 270 66.09 273.4L132 291.3L192.5 256L132 220.7L66.09 238.6c-2.111 .5625-4.225 .8438-6.305 .8438c-10.57 0-20.27-7.031-23.16-17.72C33.15 208.9 40.7 195.8 53.51 192.3l20.33-5.508L47.88 171.6c-15.28-8.906-20.43-28.5-11.5-43.75c8.885-15.28 28.5-20.44 43.81-11.5l25.09 14.64L99.9 110.7C96.51 97.91 104.2 84.75 116.1 81.38C129.9 77.91 142.1 85.63 146.4 98.41l17.74 66.92L223.1 200.3l-.0002-70.5L175.6 80.88C166.3 71.44 166.3 56.25 175.8 46.94C185.2 37.59 200.4 37.72 209.8 47.13l14.22 14.37L223.1 32c0-17.69 14.34-32 32.03-32s32.03 14.31 32.03 32l.0002 29.5l14.22-14.37c9.307-9.406 24.51-9.531 33.97-.1875c9.432 9.312 9.525 24.5 .1875 33.94l-48.38 48.88L288 200.3l59.87-34.93l17.74-66.92c3.395-12.78 16.56-20.5 29.38-17.03c12.82 3.375 20.47 16.53 17.08 29.34l-5.379 20.29l25.09-14.64c15.28-8.906 34.91-3.75 43.81 11.5c8.932 15.25 3.785 34.84-11.5 43.75l-25.96 15.15l20.33 5.508c12.81 3.469 20.37 16.66 16.89 29.44c-2.895 10.69-12.59 17.72-23.16 17.72c-2.08 0-4.193-.2813-6.305-.8438L379.1 220.7L319.5 256l60.46 35.28l65.95-17.87C458.8 270 471.9 277.5 475.4 290.3c3.473 12.78-4.082 25.97-16.89 29.44l-20.33 5.508l25.96 15.15C479.4 349.3 484.5 368.9 475.6 384.1z")
  }
  else if(current="Drizzle"||current_weather==="ragged shower rain"||current_weather==="heavy intensity shower rain"||current_weather==="shower rain"||current_weather==="light intensity shower rain")
  {
    svge.setAttribute("viewBox", "0 0 512 512");
    main_icon.setAttribute("d", "M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112c0-44.25-35.75-80-79.1-80c-24.62 0-46.25 11.25-60.1 28.75C256.4 24.75 219.3 0 176 0C114.3 0 64 50.13 64 112c0 7.25 .7512 14.25 2.126 21.25C27.76 145.8 .0054 181.5 .0054 224c0 53 42.1 96 95.1 96h319.1C469 320 512 277 512 224S469 128 416 128zM198.8 353.9c-12.17-5.219-26.3 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C134.1 511.4 138.2 512 141.3 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C216.6 373.3 210.1 359.2 198.8 353.9zM81.46 353.9c-12.19-5.219-26.3 .4062-31.52 12.59l-47.1 112C-3.276 490.7 2.365 504.8 14.55 510.1C17.63 511.4 20.83 512 23.99 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C99.29 373.3 93.64 359.2 81.46 353.9zM316.1 353.9c-12.19-5.219-26.3 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C252.3 511.4 255.5 512 258.7 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C333.1 373.3 328.3 359.2 316.1 353.9zM433.5 353.9c-12.17-5.219-26.28 .4062-31.52 12.59l-47.1 112c-5.219 12.19 .4219 26.31 12.61 31.53C369.6 511.4 372.8 512 375.1 512c9.312 0 18.17-5.438 22.08-14.53l47.1-112C451.3 373.3 445.6 359.2 433.5 353.9z")
  }
  else if(current_weather==="extreme rain"||current_weather==="very heavy rain"||current_weather==="heavy intensity rain"||current_weather==="moderate rain"||current_weather==="light rain")
  {
    svge.setAttribute("viewBox", "0 0 512 512");
    main_icon.setAttribute("d", "M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM368 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S368 437.5 368 464zM48 464C48 490.5 69.49 512 96 512s48-21.49 48-48s-48.01-95.1-48.01-95.1S48 437.5 48 464zM208 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S208 437.5 208 464z")
  }
  else if(current="Thunderstorm")
  {
    svge.setAttribute("viewBox", "0 0 512 512");
    main_icon.setAttribute("d", "M352 351.1h-71.25l47.44-105.4c3.062-6.781 1.031-14.81-4.906-19.31c-5.969-4.469-14.22-4.312-19.94 .4687l-153.6 128c-5.156 4.312-7.094 11.41-4.781 17.72c2.281 6.344 8.281 10.56 15.03 10.56h71.25l-47.44 105.4c-3.062 6.781-1.031 14.81 4.906 19.31C191.6 510.9 194.1 512 198.4 512c3.656 0 7.281-1.25 10.25-3.719l153.6-128c5.156-4.312 7.094-11.41 4.781-17.72C364.8 356.2 358.8 351.1 352 351.1zM416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h46.63l140.2-116.8c8.605-7.195 19.53-11.16 30.76-11.16c10.34 0 20.6 3.416 29.03 9.734c17.96 13.61 24.02 37.45 14.76 57.95L330.2 320H416c53 0 96-43 96-96S469 128 416 128z")
  }
  let now = document.querySelector(".now")
  now.innerHTML=response.data.weather[0].main;
  let procent = document.querySelector(".procent");
  procent.innerHTML = response.data.main.humidity;
  let wind = document.querySelector(".wind");
  wind.innerHTML = response.data.wind.speed
  let advice = document.querySelector(".advice")
  if (current_weather==="clear sky" && temperature>=24)
  {
    advice.innerHTML = b1[getRandomInt(3)];
  }
  else if (current==="Clouds"&& temperature>=24)
  {
    advice.innerHTML = b2[getRandomInt(3)];
  }
  else if (current="Thunderstorm")
  {
    advice.innerHTML = b5[getRandomInt(2)];
  }
  else if (current_weather==="clear sky" && temperature<24)
  {
    advice.innerHTML = b3[getRandomInt(2)];
  }
  else if (current==="Clouds"&& temperature<24)
  {
    advice.innerHTML = b4[getRandomInt(2)];
  }
  else if (current==="Snow")
  {
    advice.innerHTML = b6[getRandomInt(2)];
  }
  else if (current==="Rain"||"Drizzle")
  {
    advice.innerHTML = b7[getRandomInt(2)];
  }
  else if (current==="Mist"||current==="Smoke"||current==="Haze"||current==="Dust"||current==="Fog"||current==="Sand"||current==="Ash"||current==="Squall"||current==="Tornado")
  {
    advice.innerHTML = "Be carefull"
  }
  else
  {
    advice.innerHTML = "Just enjoy time"
  }
}
//For changing gradus
let c = document.querySelector(".cel");
let f = document.querySelector(".far");
c.addEventListener("click", cel);
f.addEventListener("click", far);

