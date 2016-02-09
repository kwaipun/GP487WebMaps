var map;

require([
  "esri/map",
  "esri/arcgis/utils",
  "esri/dijit/Legend",
  "esri/dijit/Scalebar",
  "esri/dijit/Popup",
  "esri/dijit/PopupTemplate",
  "dojo/dom-construct",
  "dojo/domReady!"],
  function (Map, arcgisUtils, Legend, Scalebar, Popup, PopupTemplate, domConstruct) {
      arcgisUtils.arcgisUrl = 'http://www.arcgis.com/sharing/rest/content/items';
      arcgisUtils.createMap("91f1688adcc149d79af8813b5f9e914e", "map").then(function (response) {
          map = response.map;

          var layers = response.itemInfo.itemData.operationalLayers;
          var layerInfo = [];
          dojo.forEach(layers[0].featureCollection.layers,function(layer){
              if(!layer.featureCollection){
                  layerInfo.push({"layer":layer.layerObject,"title":layer.title});
              }
          });

          var popup = new Popup({
              titleInBody: false
          }, domConstruct.create("div"));

          var template = new PopupTemplate({
              title: "Sidewalk Issues",
              description: "",
              fieldInfos: [{
                  fieldName: "Issue",
                  label: "Issue"
              }, {
                  fieldName: "Description",
                  label: "Description"
              }]
          });

          var legendDijit = new esri.dijit.Legend({
              map:map,
              layerInfos:layerInfo
          },"legend");
          legendDijit.startup();
          var scalebar = new Scalebar({
              map:map,
              scalebarUnit: 'metric',
              attatchTo: 'bottom-left'});
      });
  });
