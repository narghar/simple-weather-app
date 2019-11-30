
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const temperature = document.querySelector('.temperature');
const condition__icon = document.querySelector('.condition__icon');
const condition__desc = document.querySelector('.condition__desc');
const pressure = document.querySelector('.pressure');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const dayOne = document.querySelector('.dayOne');
const dayTwo = document.querySelector('.dayTwo');
const dayThree = document.querySelector('.dayThree');
const dayFour = document.querySelector('.dayFour');
const dayFive = document.querySelector('.dayFive');

let units = 'metric';
let lang = 'pl';

async function getData(query) {
  console.log(JSON.stringify(query));
  query.units = units;
  query.lang = lang;


  const response = await fetch('/api/weather', {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query)
  });


  const responseTwo = await fetch('/api/weatherTwo', {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query)
  });


  console.log(response);
  console.log(responseTwo);

  const data = await response.json();
  const dataTwo = await responseTwo.json();
  console.log(dataTwo);
  console.log(data);
  if (data.list && dataTwo) {
    setData(data, dataTwo);
  }


}


function setData(data, dataTwo) {
  dayOne.textContent = data.list[4].main.temp;
  dayTwo.textContent = data.list[12].main.temp;
  dayThree.textContent = data.list[20].main.temp;
  dayFour.textContent = data.list[28].main.temp;
  dayFive.textContent = data.list[36].main.temp;
  city.textContent = data.city.name;

  city.textContent = dataTwo.name;
  temperature.textContent = dataTwo.main.temp;
  humidity.textContent = dataTwo.main.humidity;
  wind.textContent = dataTwo.wind.speed;
  pressure.textContent = dataTwo.main.pressure;
  condition__desc.textContent = dataTwo.weather[0].description;
  condition__icon.setAttribute('src', `https://openweathermap.org/img/wn/${dataTwo.weather[0].icon}@2x.png`)
  country.textContent = dataTwo.sys.country

}
//function setDataTwo(dataTwo) {
 // city.textContent = dataTwo.name;
  //country.textContent = dataTwo.sys.country;
  //temperature.textContent = dataTwo.main.temp;
  //condition__icon.setAttribute('src', `https://openweathermap.org/img/wn/${dataTwo.weather[0].icon}@2x.png`);
  //condition__desc.textContent = dataTwo.weather[0].description;
 // pressure.textContent = dataTwo.main.pressure;
 // wind.textContent = dataTwo.wind.speed;
  //humidity.textContent = dataTwo.main.humidity;

//}

module.exports = getData;
