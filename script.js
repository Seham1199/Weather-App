let search  = document.getElementById('search');
let searchIcon  = document.getElementById('searchIcon');
let weatherDay = document.getElementById('weatherDay');
let teamperature = document.getElementById('teamperature');
let description = document.getElementById('description');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let image  =document.getElementById('image');
let bodyBg = document.getElementById('bodyBg');

async function getWeatherData(cityName){
     let weatherResponse =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a4119e77960b483787874059242101&q=${cityName}&days=3`);
     let weatherData = await weatherResponse.json();
     // console.log(weatherData);
    return weatherData ;
}


function displayData(data){
  let todayData = new Date();
  weatherDay.innerHTML = todayData.toLocaleDateString("en-Us" , {weekday:"long"});
  teamperature.innerHTML = data.current.temp_c;
  description.innerHTML = data.current.condition.text;
  humidity.innerHTML = data.current.humidity+"%";
  wind.innerHTML = data.current.wind_kph+"Km/h";

  let desc = data.current.condition.text;
 // console.log(desc);

switch (desc) {
  case "Sunny":
    image.src = "images/clear.png"
    bodyBg.style.backgroundImage = "url('./images/natural-sky-clouds-background.jpg')";
    break;
    case "Clear":
    image.src = "images/clear.png"
    bodyBg.style.backgroundImage = "url('./images/natural-sky-clouds-background.jpg')";
    break;
    case "Partly cloudy":
      image.src = "images/cloud.png"
      bodyBg.style.backgroundImage = "url('./images/sky-covered-with-clouds.jpg')";
      break;
      case "Rain":
        image.src = "images/rain.png"
        bodyBg.style.backgroundImage = "url('./images/black-rain-abstract-dark-power.jpg')";
        break;
        case "Snow":
    image.src = "images/snow.png"
    break;
      case "mist":
      image.src = "images/mist.png"
      break;
  default:
    image.src = "images/cloud.png"
    bodyBg.style.backgroundImage = "url('./images/sky-covered-with-clouds.jpg')";
    break;
}
}




async function startApp(city="london"){
  let weatherData = await getWeatherData(city); 
 
  displayData(weatherData);

}
startApp();

searchIcon.addEventListener('click' , function(){
  startApp(search.value);
});
