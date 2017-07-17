const seattle = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&APPID=cef02c615e447123fdc7bf049f7807a8"
const london = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&APPID=cef02c615e447123fdc7bf049f7807a8"

function getInfoSea(){
  let request = new XMLHttpRequest();
  request.open('GET', seattle, true);
  request.onload = function(){
    let container = document.getElementById("container");
    // let container = document.querySelector(""#container") -- it works the same.
    let response = JSON.parse(request.response);
    console.log(response)
    //because the content needed is from body -- check in console by calling getInfo()
    // let humidity = "Seattle: Humidity = " + response.main.humidity
    // let humidity = "Seattle: Pressure = " + response.main.humidity
    // let humidity = "Seattle: Temperature = " + response.main.humidity

    container.innerHTML = "Seattle: current humidity is " + response.main.humidity +"; pressure is " +response.main.pressure + "; temperature is " +response.main.temp
  }

  request.error = function(errObj){
    console.log("broken :(");
    console.log(errObj);
  }
  request.send()
}



function getInfoLon(){
  let request = new XMLHttpRequest();
  request.open('GET', london, true);
  request.onload = function(){
    let container = document.getElementById("container");
    // let container = document.querySelector(""#container") -- it works the same.
    let response = JSON.parse(request.response);
    console.log(response)
    //because the content needed is from body -- check in console by calling getInfo()

    container.innerHTML = "London: current humidity is " + response.main.humidity +"; pressure is " +response.main.pressure + "; temperature is " +response.main.temp
  }

  request.error = function(errObj){
    console.log("broken :(");
    console.log(errObj);
  }
  request.send()
}
//below works the same and should delete "onclick=getInfo() from button tag of the HTML"
  // document.addEventListener("DOMContentLoaded", function(){
  // let btnQuote = document.querySelector("button");
  // btnQuote.addEventListener("click", getInfo)
//})
