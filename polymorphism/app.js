"use strict";
//Parent Object
let Parent = 
{
    draw:  ()=> "I am a parent"
    
};
//Child Object inherit all properties and methods from Parent
let firstChild = Object.create(Parent,{
    draw :
     {
        "value" : () => "I am a first child"
     }
 });

//Child Object inherit all properties and methods from Parent
let secondChild = Object.create(Parent,{
    draw : 
    {
        "value" : () => "I am a second child"
    }
 });

let thirdChild = Object.create(Parent,{});

const shapes = [Parent, firstChild, secondChild, thirdChild];

shapes.forEach(printAll);

function printAll (elem)
{
 console.log(elem.draw());
};