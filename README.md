# Leaflet Feature Examples

This repository contains an example of a [Leaflet](leafletjs.com) map that shows info on projects funded by donors in Kenya from 2013 to 2015. The data was provided by [Kenya OpenData](http://www.opendata.go.ke/datasets/distribution-of-donor-and-gok-funded-projects-2013-to-2015/data). Tiles were provided by [OpenStreetMaps](http://www.openstreetmap.org/).


Some mapping features exampled are:

-GeoJSON point data (projects) mapped with popup text boxes


-marker clustering using [Leaflet.markercluster plugin](https://github.com/Leaflet/Leaflet.markercluster)


-a toggle for marker clustering following [this stackexchange answer](https://gis.stackexchange.com/questions/152128/leaflet-markercluster-cluster-uncluster-toggle) as an example.


-GeoJSON shape data (Counties) with cloropleth styling based on project counts


it contains an HTML file that can be run on a web server (index.html).


to install, run `git clone https://github.com/bradleytaftsmith/donor-map .` from the working directory of your web server (/var/www/html/ on apache2).


Feel free to reach out if you have any questions!
Bradley Smith

