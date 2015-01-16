
const PATH = require("path");
const FS = require("fs");
const WAITFOR = require("waitfor");
const LWIP = require("lwip");


function main (callback) {

    var pagesBasePath = PATH.join(__dirname, "pages");

    return FS.readdir(PATH.join(pagesBasePath, "raw"), function (err, files) {
        if (err) return callback(err);

        var waitfor = WAITFOR.serial(callback);
        files.forEach(function (file) {
            waitfor(function (callback) {

                var targetPath = PATH.join(pagesBasePath, file);

                return FS.exists(targetPath, function (exists) {
                    if (exists) return callback();

                    return LWIP.open(PATH.join(pagesBasePath, "raw", file), function(err, image) {
                        if (err) return callback(err);

                        var step = image;

                        step = step.batch()
                            .crop(10, 10, 2333, 2683)
                            .contain(600, 700, "white");

                        if (file === "page_02.jpg") {
                            step = step.rotate(180, "white");
                        }

                        return step.writeFile(targetPath, function(err) {
                            if (err) return callback(err);
                            return callback();
                        });
                    });
                });
            });
        });
        return waitfor();
    });

}


if (require.main === module) {
    main(function (err) {
        if (err) {
            console.error(err.stack);
            return;
        }
    });
}

/*

LWIP.open('image.jpg', function(err, image) {

  // check err...
  // define a batch of manipulations and save to disk as JPEG:
  image.batch()
    .scale(0.75)          // scale to 75%
    .rotate(45, 'white')  // rotate 45degs clockwise (white fill)
    .crop(200, 200)       // crop a 200X200 square from center
    .blur(5)              // Gaussian blur with SD=5
    .writeFile('output.jpg', function(err){
      // check err...
      // done.
    });

});
*/