window = ""


function preload(){
window = loadImage("window.jpg")
}

function setup(){
canvas = createCanvas(600, 400)
canvas.position(350,200)
}

function draw(){
    image(window,0,0,600,400)
    fill("purple")
    text("window", 45,75)
    noFill()
    rect(45,50,450,350)
}