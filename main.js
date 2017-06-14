var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Acc", "application/json");

var myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'no-cors',
  cache: 'default'
};

let data = [];

fetch("https://www.metaweather.com/api/location/2357024/2017/06/14/", myInit)
  .then(function(res, rej) {
    console.log(res, rej)
    return res.json();
  })
  .then(function(json) {
    console.log(json);
  });
