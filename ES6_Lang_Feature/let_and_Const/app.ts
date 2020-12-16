// Let and const: scope of variable matters
var container = document.getElementById('container');

for (var x = 0; x <= 5; x++) {
    const counter = x;
    let counter1 = x;
    var counter2 = x;
    counter = 1;  // will throw error as counter is const
}

console.log(counter);
console.log(counter1);
console.log(counter2); // not throwing error as var does not define the scope of the variable. let and const helps in this case.