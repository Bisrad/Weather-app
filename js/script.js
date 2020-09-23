
// JQuery document load
    $(document).ready(() => {
    console.log("Loaded")

    // OpenWeather API

    // use user input to fill City ID 
    const api  = {
      key: "64bf7a1719397bac60c5d6a0b39a4a3d",
      base: "http://api.openweathermap.org/data/2.5/",
      icon: "data.weather[0].com",
      img: ".png"
    }

   
    const searchbox = document.querySelector('.search-box');
    searchbox.addEventListener('keypress', setQuery);
    
    function setQuery(evt) {
      if (evt.keyCode == 13) {
        getResults(searchbox.value);
      }
    }

    
    // call api and return json promises ( current day )
    function getResults (query) {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
          return weather.json();
        }).then(displayResults);
        console.log(query); // log api data for ciy 
       
      }

    //  // catch error if no value returned 
    //  .catch(err => alert("No city entered, or misspelled. Please try again."));
    // }
  

    // Add 5 day for loop

    // import { forecastDay, list } from './js/api.js';
    // var url = "api.js";

    // $.getScript(url, function(){
    //   $(document).ready(function()


     // Display Results in HTMl
     
     function displayResults (weather) {

         // pull icons from openweather
        let iconSet = document.querySelector('.icon');
        // icon.innerHTML = `<img src='https://openweathermap.org/img/w/"${data.weather[0]}.png">`;
        console.log(iconSet); 
        
        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;
        console.log(city);
      
        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(now);
        console.log(date);
      
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
        console.log(temp);

        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = weather.weather[0].main;
        console.log(weather_el);

        let hilow = document.querySelector('.high-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
        console.log(hilow);
     }

    // add current date

    function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${month}, ${date} ${year}`;
      }

      // localStorage setup 
      // Finish Local Storage setup
            
        let saveUserInput = {
          // example {'city', Phoenix}
          city: 'Phoenix',
      };

      let userValue = JSON.stringify(saveUserInput);

      // let userConverted = JSON.parse(localStorage.getItem(userValue));

      localStorage.setItem('City', userValue)
      console.log(localStorage);

    });