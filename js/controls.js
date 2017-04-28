// Toggle variable and function, for swapping between cluster and point.
toggle = true;
function toggleCluster() {
  if(!toggle) {
    map.removeLayer(pointsLayer);
    map.addLayer(clustersLayer);
  } else {
    map.removeLayer(clustersLayer);
    map.addLayer(pointsLayer);
  }
  toggle = !toggle;
};

// Code below is attempt for a map control to change style of county menu
// var legend = L.control({position: 'topright'});
// legend.onAdd = function (map) {
// 	var div = L.DomUtil.create('div', 'info legend');
// 	div.innerHTML = '<select><option>Counties</option><option>COMING SOON</option><option>COMING SOON</option></select>'
// 	div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
// 		return div;
// };
// legend.addTo(map);