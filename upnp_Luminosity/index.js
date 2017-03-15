var five = require("johnny-five"),
	board, photoresistor;
var board = new five.Board({port: 'COM3'});

var upnp = require("peer-upnp");
var http = require("http");
var server = http.createServer();
var PORT = 8080;

var fs = require("fs");
var vm = require("vm");

vm.runInThisContext(fs.readFileSync(__dirname + "/service.js"));
vm.runInThisContext(fs.readFileSync(__dirname + "/luminosity_device.js"));


// start server on port 8080. please do this step before you create a peer
server.listen(PORT);


// Create a UPnP Peer. 
// Create a BinaryLight device as specified in UPnP http://upnp.org/specs/ha/UPnP-ha-BinaryLight-v1-Device.pdf.  
// Please refer for device configuration parameters to the UPnP device architecture.
var device = createServerPlusDevice(upnp, server, device);
    

// create a SwitchPower service in the BinaryLight device as specified here http://upnp.org/specs/ha/UPnP-ha-SwitchPower-v1-Service.pdf
var service = createService(device);



// When the board is ready
board.on("ready", function() {
 // Create a new `potentiometer` hardware instance.
  potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });

  // "data" get the current reading from the potentiometer
  photoresistor.on("data", function() {
  

    //newValue = Math.trunc((this.value * 100)/1023);
    service.set("Status",newValue);
    service.set("Target",newValue);

    if ((newValue != oldValue) && timeOut) {
      console.log("Nouvelle valeur" + newValue);
      oldValue = newValue;

      //service.notify("Target");
      service.notify("Status");
      timeOut = false;
      setTimeout(function () {
        timeOut = true;
      }, 1500);
    }


  });
});