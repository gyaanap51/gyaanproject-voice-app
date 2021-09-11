function preload(){
}
function setup(){
    canvas = createCanvas(640,480);
    video = createCapture(VIDEO);
    canvas.position(650,100);
    video.size(640,480);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
   
}

noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
liftWristX = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX +" rightWristX = "+ rightWristX +"difference = " + difference);
    }
}





function draw(){
    background('#2AD5AF');

    document.getElementById("square_side").innerHTML = "Length of a Square will be" + difference + "px";
     fill('#f59942');
     stroke('#f55742');
     textSize(difference);
     text("Gyaan", noseX, noseY);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}