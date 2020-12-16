// Destructuring 
var array = [123, "Pick up drycleaning", false];
var [id, title, completed] = array;

// swap becomes easy
var a = 1;
var b = 10;
[a,b] = [b,a];

// In function
function  getTodo(id){
    var todo = {
        id1: 123,
        title1: "pick up",
        completed1: false
    }
    return todo;
}

var {completed1: isCompleted, id1, title1} = getTodo(123);


// pass around object for destructuring. countdown example
// function countdown(options) -> need to use options and need to do all the assignment and checking inside function.
function countdown({ 
    initial, 
    final: final = 0, 
    interval: interval = 1, 
    initial: current 
}) {
    
    while (current > final) {
        console.log(current);
        current -= interval;
    }

}
