var x = Math.random() * innerWidth
var y = Math.random() * innerHeight
var dx= (Math.random() - .5)* 8;
var dy= (Math.random() - .5)* 8;
var radius = 30;

var canvas = document.getElementById("spheres")

canvas.width= window.innerWidth
canvas.height= window.innerHeight
var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius=40;
// var minRadius=3;
var colorArray= ['#F7F3E8','#F2583E','#77BED2','#D5E1DD'];

var colorArray= ['#2e4482','#546bab','#87889c','#131862'];

window.addEventListener('mousemove', function(event){

    mouse.x = event.x
    mouse.y = event.y
    
})

window.addEventListener('resize', function(){
    canvas.width= window.innerWidth
    canvas.height= window.innerHeight

    init();
})



function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius= radius;
    this.minRadius= radius;
    this.color= colorArray[Math.floor(Math.random()*4)]

    this.draw= function(){
        c.beginPath();
        c.arc(this.x,this.y, this.radius,0, Math.PI *2, false);
        c.strokeStyle = this.color
        c.stroke()
        c.fillStyle = this.color
        c.fill()


    }


    this.update= function(){
        if( this.x+this.radius > innerWidth || this.x-this.radius <0){
            this.dx=-this.dx;
        }
        if (this.y+this.radius > innerHeight|| this.y-this.radius <0){
            this.dy=-this.dy
        }
        this.x+=this.dx
        this.y+=this.dy
        //interactions
        if ((mouse.x - this.x < 50 && mouse.x - this.x >-50) &&
            (mouse.y - this.y < 50 && mouse.y - this.y>-50)){
                if (this.radius<maxRadius){
                    this.radius += .5;
                    
                }
            
        }else if( this.radius>6){
            
            if (this.radius>this.minRadius){
                this.radius -= .25;
            }
        }

        // if( mouse.x < this.x ){
        //         console.log(this.dx)
        // }else if(mouse.x > this.x){
        //         console.log(this.dx)
        // }




        this.draw();
    }
}


var circleArray= [];


 
function init(){
    circleArray=[];
    for(var i = 0; i < 500; i++){
        var radius= Math.ceil(Math.random()*4)
        // console.log(radius)
        var x = Math.random() * (innerWidth-radius*2) + radius;
        var y = Math.random() * (innerHeight- radius*2) + radius;
        var dx= (Math.random() - .5)* 1;
        var dy= (Math.random() - .5)* 1;
      
        circleArray.push(new Circle(x,y,dx,dy,radius))
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++){
        
        circleArray[i].update();


    }

}
init()
animate()