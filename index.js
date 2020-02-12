// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius; 
  }
  get diameter(){
    return 2 * this.radius; 
  }
  get circumference(){
    return (2 * this.radius * Math.PI); 
  }
  get area(){
    return (this.radius ** 2 * Math.PI);  
  }
  set diameter(newdiam){
    
  }
  set circumference(newcircum){
    
  }
  set area(newarea){
    
  }
}