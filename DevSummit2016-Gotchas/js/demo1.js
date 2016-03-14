// @formatter:off
require([
    "esri/map",
    "esri/arcgis/utils",
    "esri/dijit/Legend",
    "esri/dijit/BasemapGallery",

    "dojo/ready",
    "dojo/parser",

    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane"
  ], function(
    Map,
    arcgisUtils,
    Legend,
    BasemapGallery,

    ready,
    parser
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
       * Step: add the Legend
			 */
      var legendLayers = arcgisUtils.getLegendLayers( response );
      var theLegend = new Legend({
        map : theMap,
        arrangement: Legend.ALIGN_RIGHT,
        layerInfos : legendLayers
      }, "divLegend" );
      theLegend.startup();
      
      /*
       * Step: Add the BasemapGallery
       */
      var basemapGallery = new BasemapGallery({
        map : theMap,
        showArcGISBasemaps : true
      }, "basemapGallery");
      basemapGallery.startup();
      
    }); //End of then
  }); // End of Ready
}); //End of Require
