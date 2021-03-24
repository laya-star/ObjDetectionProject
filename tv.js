img="";
status="";
objects=[];
function preload(){
    img=loadImage('tv.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(300,150);
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    
}
function draw(){
    image(img,0,0,640,420);
    if(status !=""){
        for(i=0; i < objects.length; i++){
        

        fill('#cf040b');
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%", objects[i].x+15,objects[i].y+15);
        noFill();
        stroke('#cf040b');
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    console.log(objects.length);
}
