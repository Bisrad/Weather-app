// button.addEventListener("click", function() {
//     alert('I was clicked');
//     // add catch to api for user input feild 
//     fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid64bf7a1719397bac60c5d6a0b39a4a3d')

//         // call api and return json promises
//         .then(response => response.json())
//         .then(data => {

//         // check api response
//         console.log(data);
        
//         // get data to fill html blocks
//           var nameValue = data['name'];
//           var tempValue = data['main']['temp'];
//           var descValue = data['weather'][0]['description'];
          
//         // fill html area with api info  
//         main.innerHTML = nameValue;
//         desc.innerHTML = "Desc - "+descValue;
//         temp.innerHTML = "Temp - "+tempValue;
//         input.value ="";
        
//         })

//         // change heading to match city input
//         // document.getElementById("heading").value = inputValue.value;
        
//         // catch error if no value returned 
//         .catch(err => alert("No city entered, or misspelled. Please try again."))
//         })