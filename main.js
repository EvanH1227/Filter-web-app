noseX=0;
noseY=0;

function preload() {
clon_nose = loadImage('https://i.postimg.cc/4yKmx8KL/Clown-nose-img.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = creatCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
image(video, 0, 0, 300, 300);
Fill(255,0,0);
stroke(255,0,0);
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myfliterImage.png');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y 
    console.log("nose x = " + noseX);
     console.log("nose y = " + noseY);
    }   
}