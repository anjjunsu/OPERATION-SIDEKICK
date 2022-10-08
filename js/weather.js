const OPEN_WEATHER_API_KEY = "8becec00c5762ae5f3645a25f577006f";

function onGeoLocationSuccess(location) {
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    const url = 
        `https://api.openweathermap.org/data/2.5/weather?lat={${latitude}}&lon={${longitude}}&appid={${OPEN_WEATHER_API_KEY}}&units=metric`;

   fetch(url)
           .then((response) => response.json())
           .then((data) => {
               const weatherSpan = document.querySelector("#weather span:first-child");
               const citySpan = document.querySelector("#weather span:last-child");
               const name = data.name;
               const weather = data.weather[0].main;
               const temp = data.main.temp;

                weatherSpan.innerText = `${weather} / ${temp}`;
                citySpan.innerText = name;
            });
}

function onGeoLocationFail() {

}

navigator
   .geolocation
   .getCurrentPosition(onGeoLocationSuccess, onGeoLocationFail);

