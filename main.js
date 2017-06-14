// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Acc", "application/json");
//
// var myInit = {
//   method: 'GET',
//   headers: myHeaders,
//   mode: 'no-cors',
//   cache: 'default'
// };

let data;
let current_temp = document.getElementById("temp")

fetch("http://api.wunderground.com/api/a0fad745509bd909/geolookup/conditions/q/GA/Atlanta.json")
  .then(function(res, rej) {
    console.log("response:", res);
     return res.json();
    //  let temp = data.location.feelslike_string
    //  console.log("current_temp:", temp);
  })
  .then(function(json) {
    console.log(json);
    let temp = json.current_observation.feelslike_string
    console.log("current_temp:", temp);
  });
