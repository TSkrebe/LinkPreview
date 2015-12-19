var data = require("sdk/self").data;

require("sdk/tabs").on("ready", function(tab){

     var worker = tab.attach({
        contentScriptFile: data.url("tabscript.js")
     });
        
    //if mouse hover link
        worker.port.on("hover-link", function(text){
            //create panel
            var panel = require("sdk/panel").Panel({
              contentURL: text,
                label: "cool panel",
              position: {
                    top: 100,
                    right: 300,
                  },
               height: 600,
               width: 500
            });
              console.log("index " + text);
              panel.show();
        
        });
});



