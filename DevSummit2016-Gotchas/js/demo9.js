var mapMain;

// @formatter:off
require([
  "esri/map",
  "esri/geometry/Extent",
  "esri/layers/ArcGISDynamicMapServiceLayer",
  "esri/layers/FeatureLayer",
  "esri/layers/ArcGISTiledMapServiceLayer",    
  "esri/dijit/Legend",

  "dojo/ready",
  "dojo/parser",
  "dojo/on",

  "dijit/layout/BorderContainer",
  "dijit/layout/ContentPane"
], function (
  Map,
  Extent,
  ArcGISDynamicMapServiceLayer,
  FeatureLayer,
  ArcGISTiledMapServiceLayer,
  Legend,
  
  ready,
  parser,
  on,

  BorderContainer,
  ContentPane
) {
// @formatter:on

  // Wait until DOM is ready *and* all outstanding require() calls have been resolved
  ready(function () {

    // Parse DOM nodes decorated with the data-dojo-type attribute
    parser.parse();

    var initialExtent = new Extent({
      "xmin" : -15416640.628377363,
      "ymin" : 3617752.363829254,
      "xmax" : -11101923.25573688,
      "ymax" : 5391091.420044872,
      "spatialReference" : {
        "wkid" : 102100,
        "latestWkid" : 3857
      }
    });

    // Create the map
    theMap = new Map("cpCenter", {
      basemap: "satellite",
      extent : initialExtent
    });

    // Add map layers
    var lyrStreets = new ArcGISTiledMapServiceLayer ("http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer", {
      opacity : 0.25
    });

    var lyrUSA = new ArcGISDynamicMapServiceLayer( "http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer", {
      opacity : 0.5
    });

    var lyrQuakes = new FeatureLayer( "http://tmservices1.esri.com/arcgis/rest/services/LiveFeeds/Earthquakes/MapServer/0" );
    lyrQuakes.setDefinitionExpression( "MAGNITUDE >= 2.0" );

    // Broken Code - addLayers method expects array of layers
    // [ lyrStreets, lyrUSA, lyrQuakes ]
    theMap.addLayers( lyrStreets, lyrUSA, lyrQuakes );

    theMap.on( "layers-add-result", function() {
      var dijitLegend = new Legend({
        map : theMap,
        alignment : esri.dijit.Legend.ALIGN_RIGHT
      }, "divLegend");
      dijitLegend.startup();
    }); // End of theMap.On
    
  }); // End of Ready
}); // End of Require
