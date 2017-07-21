console.log("Yay we're building a page about donuts");

//Body layout and functionality

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

// SPRINKLES!

// var rAF = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//           window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//
// var spCanvasEle = document.createElement("canvas");
// spCanvasEle.className = "all-the-sprinkles";
// spCanvasEle.style.position = "fixed";
// spCanvasEle.style.top = "0";
// spCanvasEle.style.right = "0";
// spCanvasEle.style.bottom = "0";
// spCanvasEle.style.left = "0";
// spCanvasEle.style.zIndex = "999999";
// spCanvasEle.style.width = window.innerWidth.toString() + "px";
// spCanvasEle.style.height = window.innerHeight.toString() + "px";
// document.body.appendChild(spCanvasEle);
//
// var spCtx = spCanvasEle.getContext('2d'),
//     spCan = spCtx.canvas,
//     spCanW,
//     spCanH;
//
// var sprinkles = [],
//     spCount = 50,
//     spLenHalf = 10,
//     spWidth = 10,
//     spYReset = spLenHalf * 4,
//     spGravity = 9.8 / 120, // half gravity
//     spColors = ["#E0DC8B", "#F6AA3D", "#ED4C57", "#574435", "#6CC4B9"];
//
// function drawSprinkles() {
//   spCtx.clearRect(0, 0, spCan.width, spCan.height);
//   for(var i=0;i<spCount;i++) {
//     var sprinkle = sprinkles[i];
//     if(sprinkle.startDelay <= 0) {
//       var centerX = sprinkle.centerX,
//           centerY = sprinkle.centerY,
//           degrees = sprinkle.degrees,
//           spColor = sprinkle.color;
//
//       spCtx.save();
//
//       spCtx.beginPath();
//       spCtx.translate(centerX, centerY);
//       spCtx.rotate(degrees*Math.PI/180);
//       spCtx.lineWidth = spWidth;
//       spCtx.lineCap = "round";
//       spCtx.strokeStyle = spColor;
//       spCtx.moveTo(-spLenHalf, 0);
//       spCtx.lineTo(spLenHalf, 0);
//       spCtx.stroke();
//       spCtx.closePath();
//
//       spCtx.restore();
//
//       sprinkle.velocity += spGravity;
//       sprinkle.centerY += sprinkle.velocity;
//       sprinkle.degrees += sprinkle.angVelocity;
//       if(sprinkle.centerY > spCanH + spYReset) {
//         sprinkle.centerY = -spYReset;
//         sprinkle.velocity = Math.random();
//       }
//     } else {
//       sprinkle.startDelay--;
//     }
//   }
//   spRAF = rAF(drawSprinkles);
// }
//
// function createSprinklesArr() {
//   for(var i=0;i<spCount;i++) {
//     var spColorI = Math.floor(Math.random() * spColors.length),
//         xOffsetVal = Math.random() * spLenHalf*2 - spLenHalf;
//     var thisSprinkle = {
//       color: spColors[spColorI],
//       centerX: Math.round(Math.random() * spCanW),
//       centerY: -spYReset,
//       startDelay: Math.floor(Math.random() * 180), // max startDelay / 60 = seconds for all sprinkles to be added (180/60 = 3s)
//       velocity: Math.random(), // random vertical speed
//       angVelocity: Math.round(Math.random() * 20 - 10), // random rotation speed
//       degrees: Math.floor(Math.random() * 360) // random angle (degrees)
//     };
//     sprinkles.push(thisSprinkle);
//   }
//   spRAF = rAF(drawSprinkles);
// }
//
// function initSpCanvas() {
//   spCtx.clearRect(0, 0, spCan.width, spCan.height);
//   spCan.width  = window.innerWidth;
//   spCan.height = window.innerHeight;
//   spCanW = spCan.width;
//   spCanH = spCan.height;
//   spCount = Math.round(spCanW / 10);
//
//   createSprinklesArr();
// }
//
// function killSprinkles() {
//   cancelAnimationFrame(spRAF);
//   $('.all-the-sprinkles').remove();
// }
//
// var spCanvasResizeTO;
// $(window).on('load', function(){
//   initSpCanvas();
//   // $(document).on('click', '.all-the-sprinkles', killSprinkles);
// }).on('resize', function(){
//   spCanvasResizeTO = setTimeout(initSpCanvas,1000);
// });


// // Map API from Google + Place marker functionality

//Global Variables
var map;
var infoWindow
//-----------------------

function initMap() {
var raleigh = {lat: 35.7796, lng: -78.6382};

  map = new google.maps.Map(document.getElementById('map'), {
    center: raleigh,
    zoom: 15,
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
    keyword: ["gym"],
  }, callback);
})

//---------------------------------------------

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      // console.log(results[i]);
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
    infoWindow.setContent(place.name);
    infoWindow.open(map, this);
  });
}

// ------------------------------------------
