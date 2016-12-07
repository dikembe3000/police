var map = L.map('map', {
    center: [39.82, -98.58],
    zoom: 3,
    minZoom: 2,
    maxZoom: 18
});

L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

//add some geojson
var teardrop = new L.icon({iconUrl:'images/Cat3.png'})

function info (feature, layer) {
layer.bindPopup("<h1>Name:  " + feature.properties.name +"</p>Race:  " + feature.properties.raceethnic + "</h1>");
    layer.setIcon (teardrop);
};

L.geoJSON(police,{
onEachFeature: info   
}).addTo(map);

