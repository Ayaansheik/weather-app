//--------------------------------- INSERT YOUR APIKEY & DON'T SHOW PUBLICALY ---------------------------------------------//
let apiKey = "********************************";
let form = document.querySelector('#weather-form');
let cityInput = document.querySelector('#city');
let weatherInfo = document.querySelector('#weather-info');
 
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityInput.value;

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].main}</p>
      `;
    })
    .catch((err) => console.log(err));
});
