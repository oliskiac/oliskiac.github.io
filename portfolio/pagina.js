var col1 = '#04151F', col = '#183A37', Col1 = '#DE9151', Col = '#EFD6AC';
var act = false;
var i, a = 0, tempor, nLinAl = 15, nLinAn = 12, posFx, posFy, alto;
var contadorAl = 550, contadorAn;
let pRan = [], pCr = [];
let bot1, bot2, bot3;


function setup() {
	alto = 880;
	if(alto < windowHeight){
		alto = windowHeight;
	}
  var nosemasu = createCanvas(windowWidth-17, alto);
  nosemasu.position(0,0);
  nosemasu.style('z-index',-1);
  nosemasu.parent('juego');
  for(i = 0; i < 9; i++){
  	pRan[i] = random(3,25);
  }
  for(i = 0; i < 15; i++){
      pCr.push(new particless());
  }

  /*bot1 = createButton('YouTube');
  bot1.position(width/2, 100);

  bot2 = createButton('Github');
  bot2.position(width/2, 200);

  bot3 = createButton('OpenProcessing');
  bot3.position(width/2, 300);*/
}


function draw() {
  background(col);
	a = a + 1;
	if(a >= 10){
		a = 0;
			tempor = pRan[0];
		for(i = 0; i < 9; i++){
			if(i == 8){
				pRan[8] = tempor;
			}else{
				pRan[i] = pRan[i+1];
			}
		}
	}

  if(act ==  true){
    col1 = '#04151F';col = '#183A37';Col1 = '#DE9151'; Col = '#EFD6AC';
  }
  if(act ==  false){
    col1 = '#183A37';col = '#04151F';Col1 = '#EFD6AC'; Col = '#DE9151';
    fill(col1);
    rect((width/2)-250, 5, 500, 135);
  }

  contadorAl = alto;
  for ( i = 0; i < nLinAl; i++) {
  	stroke(Col);
  	contadorAl = contadorAl - (alto/13) + (4*i);
  	//line(0, contadorAl, windowWidth/2, i*10);
  	line(0, contadorAl, windowWidth, contadorAl);
  }

  for ( i = 0; i < nLinAn; i++) {
  	stroke(Col);
  	//tempor = (i+1)*230;
  	tempor = (i+1)*(1.5*width/nLinAn);
  	line((width/2)+tempor, height,(windowWidth/2)+(contadorAl*(tempor)/windowHeight), contadorAl);//dejar el contadorAl porque tiene el resultado acumulado
  	line((windowWidth/2)-tempor, height,(windowWidth/2)-(contadorAl*(tempor)/windowHeight), contadorAl);
  }

  line(windowWidth/2, windowHeight, windowWidth/2, contadorAl);

  for (i = 0; i < 9; i++) {
  		strokeWeight(2);
  		stroke(col1);
  		line(mouseX+((i-4)*4), mouseY+pRan[i], mouseX+((i-4)*4), mouseY-pRan[i]);
  }
  for (i = 0; i < 15;i++){
      pCr[i].move();
  }
}

function mousePressed(){
  if(act == true){
    act = false;
    for(i = 0; i < 9; i++){
  		pRan[i] = random(3,25);
  	}
  }else{
    act = true;
  }
}

class particless{

	constructor(){

		//Casilla de la que sale, vel, dis, radio, fotograma de la animacion
		this.x = int(random(-nLinAn, nLinAn));
		this.y = int(random(0,nLinAl));
		this.yFin = random(100,500);
		this.vel = random(5,15);
		this.ccc = 0;
		this.rad = 10;
		/*this.x = random(-width/4, 5*width/4);
		this.y = -random(15,100);
		this.pFx = int(random(0,width));
		this.pFy =int(random(320, alto));
    this.qwe = random(70,195);
		this.vely = (this.pFy-this.y)/this.qwe;
    this.velx = (this.pFx-this.x)/this.qwe;
		this.rad = random(4,25);
		this.vRad = (this.pFy*0.0008)-0.3;
		this.ccc = 0;*/
	}

    move(){
			noStroke();
    	this.ccc = this.ccc + 1;
        fill(Col1);
        this.x = this.x+this.velx;
        this.y = this.y+this.vely;
        this.rad = this.rad+this.vRad;
        ellipse(this.x,this.y, this.rad, this.rad);
        //line(this.x,this.y,this.pFx, this.pFy);
        if(this.ccc >= this.qwe){
        	this.x = random(-width/2, 3*width/2);
			this.y = -random(15,100);
			this.pFx = int(random(0,width));
			this.pFy =int(random(320, alto));
        	this.qwe = random(70,195);
			this.vely = (this.pFy-this.y)/this.qwe;
        	this.velx = (this.pFx-this.x)/this.qwe;
			this.rad = random(4,25);
			this.vRad = (this.pFy*0.0007)-0.31;
			this.ccc = 0;
        }
    }
}
