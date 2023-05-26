let searchbox = document.querySelector('.search-bar');
let submit = document.querySelector('.submit');


submit.addEventListener('click', function () {
    //http://api.openweathermap.org/data/2.5/weather?q=' + searchbox.value + '&units=metric&appid=3f4e45b391f7eeb37faa94cc66965c1f(current Weather call)
    var ourRequest = new XMLHttpRequest();


    ourRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchbox.value + '&appid=3f4e45b391f7eeb37faa94cc66965c1f');
    ourRequest.onload = function () {
        let data = JSON.parse(ourRequest.responseText);

        renderHTML(data);
    }
    ourRequest.send();
})



function renderHTML(data_) {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();

    let day = d.getDay();
    console.log(day);
    let day1 = days[day];
    if (day == 6) {
        day = 0;
    }
    console.log(day);

    let day2 = days[day];
    let day3 = days[day + 1];
    let day4 = days[day + 2];
    let day5 = days[day + 3];
    let day6 = days[day + 4];
    console.log(day2);
    console.log(day3);









    console.log(data_);
    let temperature = data_['list'][0]['main']['temp'];

    let feels = data_['list'][0]['main']['feels_like'];
    let icon = data_['list'][0]['weather'][0]['icon'];
    let description = data_['list'][0]['weather'][0]['description'];
    let windSpeed = data_['list'][0]['wind']['speed'];
    let humidity = data_['list'][0]['main']['humidity'];
    let Visibility = data_['list'][0]['visibility'];
    let pressure = data_['list'][0]['main']['pressure'];
    let maxTemp = data_['list'][0]['main']['temp_max'];

    let temp2 = data_['list'][5]['main']['temp'];
    let description2 = data_['list'][5]['weather'][0]['description'];
    let icon2 = data_['list'][5]['weather'][0]['icon'];

    let temp3 = data_['list'][12]['main']['temp'];
    console.log(day3);
    let description3 = data_['list'][12]['weather'][0]['description'];
    let icon3 = data_['list'][12]['weather'][0]['icon'];

    let temp4 = data_['list'][17]['main']['temp'];
    let description4 = data_['list'][17]['weather'][0]['description'];
    let icon4 = data_['list'][17]['weather'][0]['icon'];

    let temp5 = data_['list'][25]['main']['temp'];
    let description5 = data_['list'][25]['weather'][0]['description'];
    let icon5 = data_['list'][25]['weather'][0]['icon'];

    let temp6 = data_['list'][30]['main']['temp'];
    let description6 = data_['list'][30]['weather'][0]['description'];
    let icon6 = data_['list'][30]['weather'][0]['icon'];
    console.log(day);

    console.log(day2);
    console.log(day3);



    /*  document.querySelector(".weather-info").innerText = description;*/
    document.querySelector(".description").innerText = "description: " + description;
    document.querySelector(".temp").innerText = "Temperature: " + Math.round(temperature - 273.0) + "°C";
    document.querySelector(".max").innerText = "Max Temp: " + Math.round(maxTemp - 273) + "°C";

    document.querySelector(".feels-like").innerText = "Feels like: " + Math.round(feels - 273) + "°C";
    document.querySelector(".windspeed").innerText = "Wind Speed: " + windSpeed + "Km/h";
    document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
    document.querySelector(".city").innerText = "Weather in " + searchbox.value;
    document.querySelector(".day").innerText = "On " + day1;
    document.querySelector(".visibility").innerText = "Visibility: " + Visibility + "m";

    document.querySelector(".pressure").innerText = "Pressure: " + pressure + " MB";

    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";



    document.querySelector(".day").innerText = "On " + day1;

    document.querySelector(".temp2").innerText = Math.round(temp2 - 273.0) + "°C";
    document.querySelector(".description2").innerText = description2;
    document.querySelector(".icon2").src = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png";
    document.querySelector(".day2").innerText = day2;





    document.querySelector(".temp3").innerText = Math.round(temp3 - 273.0) + "°C";
    document.querySelector(".description3").innerText = description3;
    document.querySelector(".icon3").src = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";
    document.querySelector(".day3").innerText = day3;


    document.querySelector(".temp4").innerText = Math.round(temp4 - 273.0) + "°C";
    document.querySelector(".description4").innerText = description4;
    document.querySelector(".icon4").src = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png";
    document.querySelector(".day4").innerText = day4;


    document.querySelector(".temp5").innerText = Math.round(temp5 - 273.0) + "°C";
    document.querySelector(".description5").innerText = description5;
    document.querySelector(".icon5").src = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png";
    document.querySelector(".day5").innerText = day5;



    document.querySelector(".temp6").innerText = Math.round(temp6 - 273.0) + "°C";
    document.querySelector(".description6").innerText = description6;
    document.querySelector(".icon6").src = "http://openweathermap.org/img/wn/" + icon6 + "@2x.png";
    document.querySelector(".day6").innerText = day6;




    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + searchbox.value + "'";








}
