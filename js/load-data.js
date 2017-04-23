function addDataToMap(data, map) { 
    window.markerClusters = L.markerClusterGroup(); 
    window.dataLayer = L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            var popupText = "<strong>"+feature.properties.project_title+"</strong>"
                + "<br><strong>Project Description: </strong>" + feature.properties.project_description
                + "<br><strong>Project Objectives: </strong>" + feature.properties.project_objectives;
            layer.bindPopup(popupText); 
        }
    });
    window.markerClusters.addLayer(dataLayer);
    window.dataLayer.addTo(map);
};