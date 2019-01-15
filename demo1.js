let minuteMarkers = [];
function getJson() {
  fetch("https://api.myjson.com/bins/y2v0k")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let minuteMarkers = [];
      jsondata = data.event;
      jsondata.forEach(function(e) {
        minuteMarkers.push(e.EventTimeMin);
        return minuteMarkers;
      });
    })
    .catch(function(err) {
      console.log(err);
    });
}
getJson();
let player = new MediaElementPlayer("player2", {
  features: [
    "playpause",
    "current",
    "progress",
    "duration",
    "markers",
    "fullscreen"
  ],
  markers: ["4", "16"],
  markerColor: "#00FF00",
  markerCallback: function(media, time) {
    console.log(time);
  }
});