let searchBar = document.getElementsByClassName("text-area");
let searchBtn = document.getElementsByClassName("search-btn");
let weather = document.getElementsByClassName("weather-img");

let temp = document.getElementsByClassName("temp");
let cityName = document.getElementsByClassName("city");

let humidity = document.getElementsByClassName("humidity");
let wind = document.getElementsByClassName("wind");

const apiKey = "e0248b5ec2313106d8f5d6ccf99d60a0";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkweather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
        alert("Please check the spelling");
    }

    var data = await response.json();
    console.log(data);

    if (data.main) {

      cityName[0].innerHTML = data.name;
      temp[0].innerHTML = Math.round(data.main.temp) + "°C";
      humidity[0].innerHTML = data.main.humidity + "%";
      wind[0].innerHTML = data.wind.speed + "km/h";

    } else {
      console.error("Invalid API response:", data);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }

    if(data.weather[0].main == "Clouds"){
      weather[0].src = "images/clouds.png";
 }
 else if(data.weather[0].main == "Clear"){
    weather[0].src = "images/clear.png";
}

else if(data.weather[0].main == "Drizzle"){
    weather[0].src = "images/drizzle.png";
}

else if(data.weather[0].main == "Rain"){
    weather[0].src = "images/rain.png";
}

else if(data.weather[0].main == "Snow"){
    weather[0].src = "images/snow.png";
}

else if(data.weather[0].main == "Mist"){
    weather[0].src = "images/mist.png";
}

else if(data.weather[0].main == "humidity"){
    weather[0].src = "images/humidity.png";
}



}

searchBtn[0].addEventListener("click", function () {
  checkweather(searchBar[0].value);
});


