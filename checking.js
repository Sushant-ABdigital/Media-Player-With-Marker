        let minuteMarkers = [];
        function getJson() {
        fetch("https://api.myjson.com/bins/y2v0k")
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          parsingdata = JSON.parse(data);
          console.log(parsingdata);
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
        console.log(minuteMarkers);

        let player = new MediaElementPlayer("player2", {
        features: [
        "playpause",
        "current",
        "progress",
        "duration",
        "markers",
        "fullscreen"
        ],
        // markers: ["4", "14"], <- it works
        markers: minuteMarkers, // <- This does not work !
        markerColor: "#00FF00",
        markerCallback: function(media, time) {
        alert(time);
          }
        });