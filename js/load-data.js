//add counties to countyLayer

//add points to pointsLayer, and bind pop-up to each feature we care about
pointsLayer = L.geoJson(points, {
    onEachFeature: function(feature, layer) {
        var popupText = 
        	"<strong>"+feature.properties.project_title+"</strong>"
        	+ "<br><strong>County: </strong>" + feature.properties.county
        	+ "<strong>  |  Constituency: </strong>" + feature.properties.contituency
            + "<br><br><strong>Project Description: </strong>" + feature.properties.project_description
            + "<br><strong>Project Objectives: </strong>" + feature.properties.project_objectives;
        layer.bindPopup(popupText);
    }
});

//add cluster layer and fill it with points
clustersLayer = L.markerClusterGroup();
clustersLayer.addLayer(pointsLayer);

//function to return color based on different project counts
function getColor(d) {
    return d > 200 ? '#800026' :
           d > 150  ? '#BD0026' :
           d > 100 ? '#E31A1C' :
           d > 50 ? '#FC4E2A' :
           d > 25 ? '#FD8D3C' :
           d > 10 ? '#FEB24C' :
           d > 5 ? '#FED976' :
                      '#FFEDA0';
}

//function to style by projects
function styleProjects(feature) {
    return {
        fillColor: getColor(feature.properties[ 'Project Count by County' ]),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}