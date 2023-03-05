function preload()
{
    img = loadImage('faninhouse.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Fan", 45, 75);
    text("Chair", 360, 265);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    rect(350, 250, 150, 200);
}

img = "";