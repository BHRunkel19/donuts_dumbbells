console.log("Yay we're building a page about donuts");

let body = document.querySelector("body");

let donuts = document.createElement("button");
donuts.setAttribute("id", "donuts");

let dumbbells = document.createElement("button");
dumbbells.setAttribute("id", "dumbbells");

let main_content = document.createElement("section");
main_content.setAttribute("id", "main_content");
main_content.appendChild(donuts);
main_content.appendChild(dumbbells);
body.appendChild(main_content);

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.7796, lng: -78.6382},
    zoom: 12
  });
}

// AIzaSyBDJs9UE0QyxDbT-WEOO05tl4_IAQUo70Q (API KEY)
