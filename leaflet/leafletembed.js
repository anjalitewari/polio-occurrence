var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = L.tileLayer(osmUrl, {
	    maxZoom: 18,
	    attribution: osmAttrib,
	    noWrap: true
	 });
	var map = L.map('map', {
        layers: [osm],
        center: new L.LatLng(0,0),
        zoom: 1,
        maxBounds: [[90,-180], [-90, 180]]
    });
}