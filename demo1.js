let typeData = [];
let minuteMarkers = [];
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "timeline.json", false); // Replace 'timeline.json' with the path to your file
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
    mydata.forEach(function(k) {
      typeData.push(k.EventType);
      return typeData;
    });
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
  markerCallback: function(media, time) {
    console.log(time);
  }
});
let ids = document.querySelectorAll(".mejs__time-marker");
console.log(ids);
ids.forEach(function(e) {
  let colors = [
    "#0984e3",
    "#d63031",
    "#6c5ce7",
    "#fdcb6e",
    "#00cec9",
    "#192a56",
    "#8c7ae6",
    "#e84118",
    "#fbc531",
    "#40739e"
  ];
  e.style.background = colors[e.id];
});
