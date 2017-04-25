// see kenya.intelmap.com for an example of this map.

var map = L.map('map').setView([0.177819, 37.739928], 6);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Leaflet + OpenStreetMap',
    maxZoom: 18,
    }).addTo(map);


            
// $.getJSON("./data/points.geojson", function(data) {addDataToMap(data, map);}); 