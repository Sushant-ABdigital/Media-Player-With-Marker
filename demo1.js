let typeData = [];
let minuteMarkers = [];
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "timeline.json", false); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}
function init() {
  loadJSON(function(response) {
    var data = JSON.parse(response);
    let mydata = data.event;
    mydata.forEach(function(e) {
      minuteMarkers.push(e.EventTimeMin);
      return minuteMarkers;
    });
    mydata.forEach(function(k){
      typeData.push(k.EventType);
      return typeData;
    })
  });
}
init();

let player = new MediaElementPlayer("player2", {
  features: [
    "playpause",
    "current",
    "progress",
    "duration",
    "markers",
    "fullscreen"
  ],
  markers: minuteMarkers,
  // markerColor: "#00FF00",
  // markerColor: setColor(),
  markerCallback: function(media, time) {
    console.log(time);
  }
});
// console.log(typeData[0]);
// console.log(typeData[1]);
// function setColor(){
//   if(typeData[0] == 0 || 1 || 2){
//     console.log("number 0");
//     return "blue"
//   } else if(typeData[1] == 0 || 1 || 2){
//     console.log("number 1");
//     return "green";
//   } else {
//     console.log("number 2");
//     return "red";
//   }
// }
// console.log(player.options.markerColor);
