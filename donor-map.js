// see kenya.intelmap.com for an exampl of this map.

var map = L.map('map').setView([0.177819, 37.739928], 6);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Software & Tiles',
    maxZoom: 18,
    }).addTo(map);

function addDataToMap(data, map) { 
    var markerClusters = L.markerClusterGroup(); 
    var dataLayer = L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            var popupText = "<strong>"+feature.properties.project_title+"</strong>"
                + "<br><strong>Project Description: </strong>" + feature.properties.project_description
                + "<br><strong>Project Objectives: </strong>" + feature.properties.project_objectives;
            layer.bindPopup(popupText); 
        }
    });
    markerClusters.addLayer(dataLayer);
    markerClusters.addTo(map);
};
            
$.getJSON("./data/distribution.geojson", function(data) {addDataToMap(data, map);});   
