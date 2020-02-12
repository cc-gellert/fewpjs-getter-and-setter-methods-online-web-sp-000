// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius; 
  }
  get diameter(){
    return (2 * this.radius); 
  }
  get circumference(){
    return (2 * this.radius * Math.PI); 
  }
  get area(){
    return Math.PI(this.radius ** 2);  
  }
  set diameter(){
    
  }
  set circumference(){
    
  }
  set area(){
    
  }
}