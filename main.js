// Step 1: Successfully Log the data that this URL responses with

fetch("http://api.wunderground.com/api/a0fad745509bd909/geolookup/conditions/q/GA/Atlanta.json")
  // There are two .then() functions here because you will need both to correctly parse the data
  .then()
  .then();


// Step 2: Update the code above to display the current "weather" and "temperature"
// HINT: Use the <span> tags with id = "weather" and "temp" to display data
// HINT: the JSON object location of weather is `{YOUR JSON DATA}.current_observation.weather`
// HINT: the JSON object location of temperature is `{YOUR JSON DATA}.current_observation.temperature_string`

// Step 3: Display all of the Airport Stations for Atlanta to the screen
// HINT: You'll need to create elements and place them inside the <div> with id = "stations"
// HINT: The array of airport stations can be found at `{YOUR JSON DATA}.location.nearby_weather_stations.airport.station`
// HINT: You want to display the "icao" property located on the Airport Station Objects
