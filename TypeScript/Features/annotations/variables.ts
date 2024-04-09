// apples can be only assigned to number, this is called Type Annotations
let apples : number=10;
let speed : string = 'fast';
let hasName : boolean = true;

// here the type and value is same,this is an exceptional case.
let nothingMuch : null = null;


//built in Objects

let now : Date =new Date();

// Array

let colors : string[] = ['red','green','blue'];


// classes
class Car{

}

let car : Car = new Car();


//Object Literal

let point : { x : number , y : number} = {
    x:10,
    y:20,
};

//  Function

const logNumber= (i:number)=>{
    console.log(i);
}

//when to use annotations
// Function that returns the 'any' type
const json='{"x":"10","y":20}'
const coordinates=JSON.parse(json);
console.log(coordinates);