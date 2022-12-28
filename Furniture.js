img = "";
status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage('Furniture.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#f72585");
    text("Chair", 300, 75);
    noFill();
    stroke("#f72585");
    rect(290, 60, 290, 320);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}