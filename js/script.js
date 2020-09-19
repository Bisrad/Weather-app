// document load
$(function() {
    console.log( "ready!" );
});

// declare variables 
var search = document.querySelector('.inputText')
var button = document.querySelector('.button')
var iconSet = document.querySelector('.icon')
var main = document.querySelector('#name')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')


// localStorage setup 
// Finish Local Storage setup
      
    let saveUserInput = '';  
    let userValue = '';

    localStorage.setItem("City", saveUserInput)
    console.log(userValue);

// OpenWeather API

button.addEventListener("click", function() {
    console.log(search.value); // on click check
    }, false);

    // fix to add user input '+search.value+'
    // expand to have 4 day forcast 

    // let request = new XMLHttpRequest(); // look into this load request
    fetch('http://api.openweathermap.org/data/2.5/weather?q=phoenix&units=metric&appid=64bf7a1719397bac60c5d6a0b39a4a3d')

    // call api and return json promises
    .then(response => response.json())
    .then(data => {
    // check data pull
    console.log(data)
    // fill variables with data
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    // replace html
    main.innerHTML = nameValue;
    desc.innerHTML = descValue;
    temp.innerHTML = Math.round(tempValue)+' &degF';
    //log inputs to console
    console.log(main);
    console.log(desc);
    console.log(temp);
   
    // pull icons from openweather
    $(".icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
    })
    // log icon
    console.log(iconSet)

    //error catch
    .catch(err => {
        console.log("Error Reading data " + err);
});

// --------------------------------------------------------------------

// set browser to open with last searched city's data using localstorage memory

// create an onclick function which clears localstorage (clear history)
  $("#clearHistory").on("click", () => {
    localStorage.clear();
  });

// need to declare a variable for recent search
  let recentSearchOption = "";

// need to give newly created recent searches onclick function
//   $("#recentSearchOption").on("click", () => {});
// });
