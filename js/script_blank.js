var map = L.map('map', {
    //for US
    //center: [39.82, -98.58],
    //for Charlotte 
    center: [35.215135, -80.831639],
    zoom: 12,
    minZoom: 2,
    maxZoom: 18
});

L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

//add some geojson Ian's Code
var teardrop = new L.icon({iconUrl:'images/green.png'})
//var teardrop2 = new L.icon({iconUrl:'images/pink.png'})

function info (feature, layer) {
layer.bindPopup("<h1>Name:  " + feature.properties.name +"</p>Race:  " + feature.properties.raceethnic + "</h1>");
    layer.setIcon (teardrop);
};

L.geoJSON(police,{
onEachFeature: info   
}).addTo(map);

var black = L.geoJson (police, {
filter: function(feature, layer) {
    return feature.properties.raceethnic == "Black";    
},
PointtoLayer: function(feature, latlng) {
return L.marker(latlng, {
icon: teardrop
});
}
});

black.addTo(map)






