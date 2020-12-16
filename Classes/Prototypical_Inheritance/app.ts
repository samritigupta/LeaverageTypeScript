/*
JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), 
as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

When it comes to inheritance, JavaScript only has one construct: objects. 
Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.

Inheriting Property: JavaScript objects are dynamic "bags" of properties (referred to as own properties). 
JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.


JavaScript does not have "methods" in the form that class-based languages define them. 
In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property
*/
function TodoService() {
    this.todos = [];
}

// add properties in TodoService function's prototype
TodoService.prototype.getAll = function() {
    return this.todos;
}

var service = new TodoService();
service.getAll()