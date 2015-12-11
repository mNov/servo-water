//Tessel hackathon project!
//by Team 3

var http = require('http');
var server = http.createServer();

var tessel = require('tessel');
var servolib = require('servo-pca9685');

var servo = servolib.use(tessel.port['C']);

var servoPos = 16; // We have a servo plugged in at position 16

var interval = 6666; //in ms: depends on water bottle size


server.on('request', function (req, res) {
    console.log("got a request")
    if (req.url === '/8') //8 oz
    {
      interval = 6666 * 2;
    }
    else if (req.url === '/20') //20 oz
    {
      interval = 6666 * 5;
    }
    else if (req.url === '/32') //32 oz
    {
      interval = 6666 * 8;
    }

    servo.configure(servoPos, 0.05, 0.22, function () {
      
      servo.move(servoPos,0.7);      
      setTimeout(function(){
          servo.move(servoPos, 0.2);
         }, interval);

        }); //move servo in setTimeout

      res.end();

    }); //server.on('request')



servo.on('ready', function () {
    server.listen(1337, function(){
      console.log("Server listening on port 1337");
    });  
});
