var map;

require([
  "esri/map",
  "esri/arcgis/utils",
  "esri/dijit/Legend",
  "esri/dijit/Scalebar",
  "dojo/domReady!"],
  function (Map, arcgisUtils, Legend, Scalebar) {
      arcgisUtils.createMap("91f1688adcc149d79af8813b5f9e914e", "map").then(function (response) {
          map = response.map;

          var legend = new Legend({
              map: map,
              layerInfos:(arcgisUtils.getLegendLayers(response))
          }, "legend");
          var home = new HomeButton({map:map},"HomeButton");
          var scalebar = new Scalebar({
              map:map,
              scalebarUnit: 'metric',
              attatchTo: 'bottom-left'});
          legend.startup();
      });
  });
