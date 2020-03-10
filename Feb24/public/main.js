import L from "leaflet";

let mymap = null;

function showPosition(oPosition){
    mymap = L.map('map-here').setView([oPosition.coords.latitude, oPosition.coords.longitude], 13);
    // Use OpenStreetMap tiles and attribution
    let osmTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let attribution = '© OpenStreetMap contributors';

    // Create the basemap and add it to the map
    L.tileLayer(osmTiles, {
        maxZoom: 18,
        attribution: attribution
    }).addTo(mymap);
}

window.addEventListener("load", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("geolocation not supported");
    }

});