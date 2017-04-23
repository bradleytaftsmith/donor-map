toggle = false;
function toggleCluster() {
  if(!toggle) {
    map.removeLayer(dataLayer);
    map.addLayer(markerClusters);
  } else {
    map.removeLayer(markerClusters);
    map.addLayer(dataLayer);
  }
  toggle = !toggle;
};