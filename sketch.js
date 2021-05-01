const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") ;
    var responseJSON=await response.json();
    console.log(responseJSON);
    var DT = responseJSON.datetime;
    var hour = DT.slice(11,13);
    if(hour>=06 && hour <= 08){
        bg="sunrise1.png";
    }
    if(hour>=09 && hour <= 011){
        bg="sunrise2.png";
    }
    if(hour>=11 && hour <=13){
        bg="sunrise3.png";
    }
    if(hour>=13 && hour <= 15){
        bg="sunrise4.png";
    }
    if(hour>=15 && hour <= 17){
        bg="sunrise5.png";
    }
    if(hour>=17 && hour <= 19){
        bg="sunrise6.png";
    }
    if(hour>=19 && hour <=21){
        bg="sunrise7.png";
    }
    if(hour>=21 && hour <= 23){
        bg="sunrise8.png";
    }
    if(hour>=23 && hour <= 01){
        bg="sunrise9.png";
    }
    if(hour>=01 && hour <= 03){
        bg="sunrise10.png";
    }
    if(hour>=03 && hour <= 05){
        bg="sunrise11.png";
    }
    if(hour>=05 && hour <= 06){
        bg="sunrise12.png";
    }
    backgroundImg=loadImage(bg);
    console.log(backgroundImg);
}
