
// call api and return json promises ( 5 day query )

  // const getResults = (searchbox.value);

    var key = "5eb6205f936f054bf639d3d40f2f486b";
    var city = "Phoenix"; 
    var url = "https://api.openweathermap.org/data/2.5/forecast";

    $.ajax({
      url: url, //API Call
      dataType: 'json',
      type: 'GET',
      data: {
        q: city,
        appid: key,
        units: 'imperial',
        cnt: '5'
      },

      // Call Success
      success: function(data) {
        console.log('data:', data)

        /// Add Mult day title 
        // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // var d = new Date(data.list[0].dt * 1000);
        // var dayName = days[d.getDay()];
        // console.log(dayName)
        

        let list = data.list;
        // console.log(list);

        for ( let i = 0 ; i < list.length; i++) {
        // console.log(list.length)
     
          // console.log(i);
            // create variables from forecast data

            let forecastDay = 
            `<div class="newDay">
            <p id="date">${list[i].dt_txt.split(" ")[1]}</p>
            <img src="https://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png"/>
            <h1 class="newTemp">${Math.round(list[i].main.temp)}&degF</h1>
            <p>High: ${Math.round(list[i].main.temp_min)}°F</br></br>Low: ${Math.round(list[i].main.temp_max)}°F</p>
            </div>`;
            console.log(forecastDay)

            // append template to html
            $("#forecast-container").append(forecastDay);
          } 

          } 
        }
    )
      
      // export this 
      // export { forecastDay, list };