// @formatter:off
// Broken Code - trailing comma in alias list
require([
    "esri/map",
    "esri/arcgis/utils",
    "esri/dijit/Legend",
    "esri/dijit/BasemapGallery",

    "dojo/ready",
    "dojo/parser",
    "dojo/on",

    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane"
  ], function(
    Map,
    arcgisUtils,
    Legend,
    BasemapGallery,

    ready,
    parser,
    on,  // Broken Code - trailing comma in anonymous function parameter list
  ) {
  // Wait until DOM is ready *and* all outstanding require() calls have been resolved
  ready( function() {

    // Parse DOM nodes decorated with the data-dojo-type attribute
    parser.parse();

    /*
     * Step: Create a map using a web map ID
     */
    arcgisUtils.createMap( "2737f52a38404a309869b6bef37e8007", "cpCenter" ).then( function( response ){
    
      /*
       * Step: Get the map from the response
       */
      var theMap = response.map;

      /*
       * Step: Add the BasemapGallery
       */
      var basemapGallery = new BasemapGallery({
        map : theMap,
        showArcGISBasemaps : true
      }, "basemapGallery");
      basemapGallery.startup();
      
		  /*
       * Step: add the Legend
			 */
      var legendLayers = arcgisUtils.getLegendLayers( response );
      var theLegend = new Legend({
        map : theMap,
        arrangement: Legend.ALIGN_RIGHT,
        layerInfos : legendLayers
      }, "divLegend" );
      theLegend.startup();
      
    }); //End of then
  }); // End of Ready
}); //End of Require
