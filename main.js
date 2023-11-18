img = "";
status = "";
objects = [];

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage('Cat_Dog.jpg'); 
}

function draw() {
    image(img, 0, 0, 640, 420);
    
    if(status != "")
    {
        for (i = 0; i < objects.length; i++)
        document.getElementById("status").innerHTML = "Status : Object Detected";
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent +"%", objects[i].x, objects[i].y);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent +"%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

    fill("#7F00F");
    text("Cat", 45, 75);
    noFill();
    stroke("#922B3E")
    rect(30, 60, 250, 350);

    fill("#99EDC3");
    text("Fox", 320, 120);
    noFill();
    stroke("#7F00F")
    rect(300, 90, 270, 350);

}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}