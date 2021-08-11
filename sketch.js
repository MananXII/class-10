var a 
var b;
var button1;



function setup() {
  
  a=prompt("enter the variable a:")
  b=prompt("enter the variable b:")
  button1=createButton("click here to swap the numbers ")
  button1.mousePressed(swap);
  
}

function draw() {
  


}

function swap (){
[a,b]=[b,a]
console.log("value of variable a is" +a)
console.log("value of variable b is" +b)

}
