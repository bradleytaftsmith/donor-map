// The commented code below was attempting to assign a pane to the cluster and points layers for hiding them with the toggle button.

// function showCluster() {
//   window.map.getPane('pointsPane').style.display = 'none';
//   window.map.getPane('clusterPane').style.display = '';
// }

// function showPoints () {
//   window.map.getPane('clusterPane').style.display = 'none';
//   window.map.getPane('pointsPane').style.display = '';
// }

// toggle = false;
// function toggleCluster() {
//   if(!toggle) {
//     showCluster();
//   } else {
//     showPoints();
//   }
//   toggle = !toggle;
// };

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