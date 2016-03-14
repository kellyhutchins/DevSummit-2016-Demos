      require([
        "esri/map",

        "dojo/parser",
        "dojo/ready",
        "dijit/layout/TabContainer", 
        "dijit/layout/ContentPane",
        
        "dojo/domReady!"
      ], function(
        Map,
        
        parser,
        ready
      ) {
      
        // parse DOM for Dojo dijits
        parser.parse();
      
        // Broken Code - no Ready function
        //ready( function() {
        
          // Tab 1 - Streets 
          var theStreetsMap = new Map("map1", {
            basemap: "streets",
            center: [-116.5453, 33.8303],
            zoom: 14,
            logo: true
          });

          // Tab 2 - Topo 
          var theTopoMap = new Map("map2", {
            basemap: "topo",
            center: [-116.5453, 33.8303],
            zoom: 14,
            logo: true
          });
        
          // Tab 3 - Satellite 
          var theSatelliteMap = new Map("map3", {
            basemap: "satellite",
            center: [-116.5453, 33.8303],
            zoom: 14,
            logo: true
          });

        //}); // Bottom of Ready

      }); // Bottom of Require
