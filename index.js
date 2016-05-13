const im = require('imagemagick-stream');
const read = fs.createReadStream('image.png');
const write = fs.createWriteStream('image-resized.png');
 //Want to change the size later
const resize = im().resize('200x200').quality(90);
//read.pipe(resize).pipe(write);

var express = require('express');
var photobooth = express();

photobooth.get('/', function (req, res) {
  res.send('Hello World!');
});

photobooth.get('/takePicture',function (req,res) {
    //fire the camera script
    //update UI to show countdown
    //Show completed picture after complete
});

photobooth.listen(3000, function () {
  console.log('Ready to take some pics!!');
});