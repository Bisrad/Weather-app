// declare variables 
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var icon = document.querySelector('.icon')
var city = document.querySelector('.name')
var temp = document.querySelector('.desc')
var desc = document.querySelector('.temp')

// OpenWeather API

// on click function
button.addEventListener('click', function() {
    // add catch to api for user input feild 
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid64bf7a1719397bac60c5d6a0b39a4a3d')

        // call api and return json promises
        .then(response => response.json())
        .then(data => {

        // check api response
        console.log(response)    
        
        // get data to fill html blocks
          var iconEle = data['cod'];
          var cityValue = data['name'];
          var tempValue = data['main']['temp'];
          var descValue = data['weather'][0]['description'];
          
        // fill html area with api info  
        icon.innerHTML = iconEle; 
        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        
        })

        // change heading to match city input
        // document.getElementById("heading").value = inputValue.value;
        
        // catch error if no value returned 
        .catch(err => alert("No city entered, or misspelled. Please try again."))
        })

        