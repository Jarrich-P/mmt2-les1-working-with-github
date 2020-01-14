var a= 100;
var b= 10;
var c= 100;
var d= 255
var e= 250
var f= 250
var kleurMMT1= 255
var kleurMMT2= 255
var kleurMMT3= 0

function setup() {
    createCanvas(800, 800);
    noStroke()
}


function draw() {

    var color1 =('#AFAAB9');
    var blue =('#CEE0DC');
    var blued =("#cee0fd");
    var yellow =("#f8df6c");
    var sauron =("#001c27");
    var eye    =("#c75306");
    var color3 =('#D4D2D5');
    var color4 =('#000000');
    var white =('#ffffff');
    var back =('#767399');
    var newColor = map(mouseX, 0, width, 0, 255);

    //a, b, c = mouseX/ 2;
    background (newColor, b, c);
    d, e, f = mouseX/ 2;
    fill(d, e, f);
    ellipse(50, 50, 65, 65);
    
    fill(color3)
    rect( 100, 200, 150 ,600);
    //ramen beige gebouw
    fill(kleurMMT1,kleurMMT2,kleurMMT3);
    rect( 100, 205, 140 ,40);
    rect( 100, 250, 140 ,40);
    fill(255, 255, 0);
    rect( 100, 295, 140 ,40);
    fill(kleurMMT1,kleurMMT2,kleurMMT3);
    rect( 200, 340, 40 ,40);
    fill(255, 255, 0);
    rect( 155, 340, 40 ,40);
    rect( 100, 385, 140 ,40);
    rect( 100, 430, 140 ,40);
    rect( 100, 475, 140 ,40);
    fill(kleurMMT1,kleurMMT2,kleurMMT3);
    rect( 100, 520, 140 ,40);
    rect( 100, 565, 140 ,40);
    fill(255, 255, 0);
    rect( 100, 610, 140 ,40);
    rect( 155, 655, 40 ,40);
    rect( 200, 655, 40 ,40);
    //sauron
    fill(sauron);
    rect(600,50,30,50);
    rect(740,50,30,50);
    rect(600,100,170,700);
    fill(eye);
    ellipse(685, 50, 70, 70);
    fill(0);
    ellipse(685, 50, 12, 50);
    //warehouse
    fill(color1)
    rect( 260, 390, 500 ,600);
    fill(blue)
    triangle(260, 390, 760, 390, 510, 220);
    fill(color3);
    ellipse(500,450,100,100);
    fill(0)
    rect(493,448,5,40);
    rect(493,448,48,5);
    //ramen warehouse
    fill(kleurMMT1, kleurMMT2, kleurMMT3);
    rect(270,448,160,100);
    fill(0);
    rect(350,448,1,100);
    rect(270,498,160,1);
    fill(kleurMMT1, kleurMMT2, kleurMMT3);
    rect(595,448,160,100);
    fill(0);
    rect(675,448,1,100);
    rect(595,498,160,1);

    //brug
    fill(color4);
    rect( 0, 730, 800 ,20);;
    rect( 650, 750, 10 ,50);
    rect( 500, 750, 10 ,50);
    rect( 350, 750, 10 ,50);
    rect( 200, 750, 10 ,50);
    fill(color1)
    rect( 10, 150, 150 ,650);

    //ramen grijs gebouw
    fill(blued);
    rect( 15, 155, 140 ,40);
    rect( 15, 200, 140 ,40);
    rect( 15, 245, 140 ,40);
    rect( 15, 290, 40 ,40);
    rect( 65, 290, 40 ,40);
    rect( 115, 290, 40 ,40);
    rect( 15, 335, 40 ,40);
    rect( 65, 335, 40 ,40);
    rect( 115, 335, 40 ,40);
    rect( 15, 380, 40 ,40);
    rect( 65, 380, 40 ,40);
    rect( 115, 380, 40 ,40);
    rect( 15, 425, 40 ,40);
    rect( 65, 425, 40 ,40);
    rect( 115, 425, 40 ,40);
    rect( 15, 470, 40 ,40);
    rect( 65, 470, 40 ,40);
    rect( 115, 470, 40 ,40);
    rect( 15, 470, 40 ,40);
    rect( 65, 470, 40 ,40);
    rect( 115, 470, 40 ,40);
    rect( 15, 515, 40 ,40);
    rect( 65, 515, 40 ,40);
    rect( 115, 515, 40 ,40);
    rect( 15, 560, 40 ,40);
    rect( 65, 560, 40 ,40);
    rect( 115, 560, 40 ,40);
    rect( 15, 605, 140 ,40);
    rect( 15, 650, 140 ,40);
    rect( 15, 695, 140 ,40);
    
  
    //sign
    fill(white);
    textSize(20);
    text('Jarrich',735,795);
}

function mousePressed(){
    kleurMMT1= 189;
    kleurMMT2= 183;
    kleurMMT3= 107;
}
