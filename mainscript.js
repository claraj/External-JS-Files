function mapCode() {

  var mapDiv = document.getElementById("map");

  //Call method in util.js
  var mapData = getMapData();

  var map = new google.maps.Map(mapDiv, mapData);

}
