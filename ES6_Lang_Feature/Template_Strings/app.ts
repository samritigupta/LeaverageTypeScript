// Template Strings
/*
Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). 
The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
*/
var container = document.getElementById('container');

var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
}

container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
    <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
</div>
`