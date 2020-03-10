import L from "leaflet";
//use mymap throughout
let mymap = null;

function showPosition(oPosition){
    mymap = L.map('map-here').setView([oPosition.coords.latitude, oPosition.coords.longitude], 7);
    // Use OpenStreetMap tiles and attribution
    let osmTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let attribution = '© OpenStreetMap contributors';

    // Create the basemap and add it to the map
    var greenIcon = L.icon({
        iconUrl: 'leaf-red.png',  
        iconSize:     [38, 95], // size of the icon
        //shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        //shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    

    L.tileLayer(osmTiles, {
        maxZoom: 18,
        attribution: attribution
    }).addTo(mymap);
    const marker=L.marker([43.3007,-80.4912],{icon: greenIcon}).addTo(mymap);
    const marker2=L.circleMarker([43.3057,-80.4912]).addTo(mymap);
    const marker3=L.circle([41.3057,-80.4912]).addTo(mymap);
    const marker4=L.popup([41.3057,-80.4912]).addTo(mymap);
    
}

window.addEventListener("load", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("geolocation not supported");
    }

});