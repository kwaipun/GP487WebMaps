var map;

require(["esri/map",
         "esri/layers/FeatureLayer",
         "esri/dijit/HomeButton",
         "esri/dijit/Legend",
         "esri/dijit/Scalebar",
         "dojo/domReady!"],
 function(Map, FeatureLayer, HomeButton, Legend, Scalebar) {
  map = new Map("map", {
    basemap: "topo",
    center: [-80.49,43.45],
    zoom: 15
  });
  var points = new FeatureLayer('https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/w16gp487sidewalkissues/FeatureServer/0');
  var home = new HomeButton({map:map},"HomeButton");
  var scalebar = new Scalebar({map:map, scalebarUnit: 'metric', attatchTo: 'bottom-left'});
  map.addLayer(points);
  home.startup();

  // var legend;
});
