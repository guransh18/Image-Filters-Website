var image = null;
var buffer = null;
var canvas = document.getElementById("can1");

function loadImg() {
    var fileinput = document.getElementById("file1");
    image = new SimpleImage(fileinput);
    buffer = new SimpleImage(fileinput);
    canvas = document.getElementById("can1");
    image.drawTo(canvas);
}

function bufferReset() {
    for (var pixel of buffer.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        image.setPixel(x, y, pixel);
    }
}

function makeGrey() {
    bufferReset();
    canvas = document.getElementById("can1");
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    return image;
}

function doGrey() {
    if (image == null || !image.complete()) {
        alert("Upload unsuccessful! \nEither the image was not uploaded or the upload was not complete.\nPlease check and Try again!");
    } else {
        var greyimage = makeGrey();
        greyimage.drawTo(canvas)
    }
}

function doReset() {
    var fileinput = document.getElementById("file1")
    buffer = new SimpleImage(fileinput);
    canvas = document.getElementById("can1");
    buffer.drawTo(canvas);

}

function makeRed() {
    bufferReset();
    canvas = document.getElementById("can1");
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen()) / 3;
        if (avg < 128) {
            pixel.setRed(2 * avg);
            pixel.setBlue(0);
            pixel.setGreen(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen(2 * avg - 255);
            pixel.setBlue(2 * avg - 255);
        }
    }
    return image;
}

function doRed() {
    if (image == null || !image.complete()) {
        alert("Upload unsuccessful! \nEither the image was not uploaded or the upload was not complete.\nPlease check and Try again!");
    } else {
        var redimg = makeRed();
        redimg.drawTo(canvas)
    }
}

function makeNegative() {
    bufferReset();
    canvas = document.getElementById("can1");
    for (var pixel of image.values()) {
        var red = 255 - pixel.getRed();
        var blue = 255 - pixel.getBlue();
        var green = 255 - pixel.getGreen();
        pixel.setBlue(blue);
        pixel.setRed(red);
        pixel.setGreen(green);
    }
    return image;
}

function doNegative() {
    if (image == null || !image.complete()) {
        alert("Upload unsuccessful! \nEither the image was not uploaded or the upload was not complete.\nPlease check and Try again!");
    } else {
        var img = makeNegative();
        img.drawTo(canvas)
    }
}

function makeRainbowH() {
    bufferReset();
    for (var pixel of image.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

        if (y <= image.getHeight() / 7) {
            if (avg < 128) {
                pixel.setRed(avg * 2);
                pixel.setGreen(0);
                pixel.setBlue(0);
                //pixel.setAlpha(255);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
        } else if (y > image.getHeight() / 7 && y <= image.getHeight() * 2 / 7) {
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0.8 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(1.2 * avg - 51);
                pixel.setBlue(2 * avg - 255);
            }
        } else if (y > image.getHeight() * 2 / 7 && y <= image.getHeight() * 3 / 7) {
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        } else if (y > image.getHeight() * 3 / 7 && y <= image.getHeight() * 4 / 7) {
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        } else if (y > image.getHeight() * 4 / 7 && y <= image.getHeight() * 5 / 7) {
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            } else {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        } else if (y > image.getHeight() * 5 / 7 && y <= image.getHeight() * 6 / 7) {
            if (avg < 128) {
                pixel.setRed(0.8 * avg);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            } else {
                pixel.setRed(1.2 * avg - 51);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        } else if (y > image.getHeight() * 6 / 7 && y <= image.getHeight()) {
            if (avg < 128) {
                pixel.setRed(1.6 * avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6 * avg);
            } else {
                pixel.setRed(0.4 * avg + 153);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(0.4 * avg + 153);
            }
        }
    }
    return image;
}



function doRainbowH() {
    if (image == null || !image.complete()) {
        alert("Upload unsuccessful! \nEither the image was not uploaded or the upload was not complete.\nPlease check and Try again!");
    } else {
        var img = makeRainbowH();
        img.drawTo(canvas)
    }
}