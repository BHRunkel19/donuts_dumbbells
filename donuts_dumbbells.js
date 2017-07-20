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


// // Map API from Google + Place marker functionality

//Global Variables
  var map;
  var infowindow
//-----------------------

function initMap() {
var raleigh = {lat: 35.7770, lng: -78.6382};

  map = new google.maps.Map(document.getElementById('map'), {
    center: raleigh,
    zoom: 16,
  });
}

//Donuts button will print relevant results
donuts.addEventListener('click', function(){
var service = new google.maps.places.PlacesService(map);
var raleigh = {lat: 35.7780, lng: -78.6382};
  service.nearbySearch({
    location: raleigh,
    radius: 500,
    keyword: ["donuts"],
  }, callback);
})

//Dumbbells button will print relevant results

dumbbells.addEventListener('click', function(){
var service = new google.maps.places.PlacesService(map);
var raleigh = {lat: 35.7780, lng: -78.6382};
  service.nearbySearch({
    location: raleigh,
    radius: 500,
    keyword: ['gym'],
  }, callback);
})

//---------------------------------------------

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

    infoWindow = new google.maps.InfoWindow();

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


// // AIzaSyBDJs9UE0QyxDbT-WEOO05tl4_IAQUo70Q (API KEY)
