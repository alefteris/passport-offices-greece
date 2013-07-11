/*global L,Handlebars*/

(function () {
    'use strict';

    var map = L.mapbox.map('map', 'alefteris.map-768ho92y');

    map.markerLayer.on('layeradd', function(e) {
        var marker = e.layer,
            props = marker.feature.properties,
            popupContent = '';

        // Create custom popup content
        var template = Handlebars.compile($('#marker-popup-template').html());
        popupContent = template(props);

        // http://leafletjs.com/reference.html#popup
        marker.bindPopup(popupContent,{
            closeButton: true
        });
    });

    map.markerLayer.loadURL('/passport-offices-greece//data/passport-offices-greece.geojson');

    map.setView([38.5, 24], 6);

})();
