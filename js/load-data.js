countiesLayer = L.geoJson(counties_joined);
countiesLayer.addTo(map);

pointsLayer = L.geoJson(points, {
    onEachFeature: function(feature, layer) {
        var popupText = "<strong>"+feature.properties.project_title+"</strong>"
            + "<br><strong>Project Description: </strong>" + feature.properties.project_description
            + "<br><strong>Project Objectives: </strong>" + feature.properties.project_objectives;
        layer.bindPopup(popupText);
    }
});
pointsLayer.addTo(map);

clustersLayer = L.markerClusterGroup();
clustersLayer.addLayer(pointsLayer);
clustersLayer.addTo(map);


// had loaded data via AJAX call in donor-map.js before; Leaflet accepts GeoJSON data as a variable if you assign it as one at the beginning of your data file, save that data file with .js prefix, and include it as a script in html. Took me a minute to remember how leaflet likes to play.
// function addDataToMap(data, map) { 
//     window.markerClusters = L.markerClusterGroup(); 
//     window.dataLayer = L.geoJson(data, {
//         onEachFeature: function(feature, layer) {
//             var popupText = "<strong>"+feature.properties.project_title+"</strong>"
//                 + "<br><strong>Project Description: </strong>" + feature.properties.project_description
//                 + "<br><strong>Project Objectives: </strong>" + feature.properties.project_objectives;
//             layer.bindPopup(popupText); 
//         }
//     });
//     window.markerClusters.addLayer(dataLayer);
//     window.dataLayer.addTo(map);
// };