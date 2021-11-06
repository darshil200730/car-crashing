const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200, 400);
  engine = Engine.create(); world = engine.world;
  ground = new Ground(600, 390, 1200, 10);
  platform = new Ground(900,300,300,10)
  car1=new Car(760,280,50,50)
  car2=new Car(810,280,50,50)
  car3=new Car(860,280,50,50)
  car4=new Car(910,280,50,50)
  car5=new Car(960,280,50,50)
  car6=new Car(1010,280,50,50)
  car7=new Car(760,230,50,50)
  car8=new Car(810,230,50,50)
  car9=new Car(860,230,50,50)
  car10=new Car(910,230,50,50)
  car11=new Car(960,230,50,50)
  car12=new Car(1010,230,50,50)
  car13=new Car(760,180,50,50)
  car14=new Car(810,180,50,50)
  car15=new Car(860,180,50,50)
  car16=new Car(910,180,50,50)
  car17=new Car(960,180,50,50)
  car18=new Car(1010,180,50,50)
boy= new Boy(100,100,100,100)
}
  

function draw() {  
  background("black");
Engine.update(engine)
  ground.display();
  platform.display();
    car1.display()
    car2.display()
    car3.display()
    car4.display()
    car5.display()
    car6.display()
    car7.display()
    car8.display()
    car9.display()
    car10.display()
    car11.display()
    car12.display()
    car13.display()
    car14.display()
     car15.display()
    car16.display()
     car17.display()
car18.display()
    boy.display()
}
