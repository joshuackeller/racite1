alert("Red Alert!");
function initMap() {
  const myLatLng = { lat: 42.314, lng: -71.250 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}
