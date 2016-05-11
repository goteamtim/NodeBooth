const im = require('imagemagick-stream');
const read = fs.createReadStream('image.png');
const write = fs.createWriteStream('image-resized.png');
 //Want to change the size later
const resize = im().resize('200x200').quality(90);
//read.pipe(resize).pipe(write);

