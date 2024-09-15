let inputCity = document.getElementById("inputCity");
let btn = document.getElementById("add");
let cityOutput = document.getElementById("city");
let descOut = document.getElementById("description");
let tempOut = document.getElementById("temp");
let windOut = document.getElementById("wind");

const apiKey = "e02639795f77dcfa1b9f356a4e3eb7a0";
async function getWeather() {
  var weatherResult = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${inputCity.value}&appid=${apiKey}`)
  ).json();
  setInfo(weatherResult);
  console.log(weatherResult);
}
function converToCel(value) {
  return (value - 273).toFixed(2);
}

function setInfo(data) {
  let cityname = data["name"];
  let desc = data["weather"][0]["description"];
  let temp = data["main"]["temp"];
  let wind = data["wind"]["speed"];
  console.log(desc);

  cityOutput.innerHTML = `city : ${cityname}`;
  descOut.innerHTML = `description : ${desc}`;
  tempOut.innerHTML = `tempration : ${converToCel(temp)}`;
  windOut.innerHTML = `wind speed : ${wind} km/h`;
  console.log(descOut);
  console.log(cityOutput);
  console.log(tempOut);
  console.log(windOut);
}
btn.addEventListener("click", getWeather);
