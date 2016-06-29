const im = require('imagemagick-stream');
//const read = fs.createReadStream('image.png');
//const write = fs.createWriteStream('image-resized.png');
 //Want to change the size later
//const resize = im().resize('200x200').quality(90);
//read.pipe(resize).pipe(write);

var express = require('express');
var photobooth = express();

photobooth.get('/', function (req, res) {
  res.sendFile(__dirname+"/"+"index.html");
});

photobooth.get('/takePictures/{time}',function (req,res) {
    //Pass the time variable as the filename
    //fire the camera script
    //update UI to show countdown
    //Show completed picture after complete
});

photobooth.use(express.static(__dirname));

photobooth.listen(3000, function () {
  console.log('Ready to take some pics!');
});