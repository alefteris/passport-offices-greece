var map=L.mapbox.map("map","alefteris.map-768ho92y").setView([38.5,24],6),markerLayer=L.mapbox.markerLayer().loadURL("//alefteris.github.io/passport-offices-greece/app/data/passport-offices-greece.geojson");map.addLayer(markerLayer);