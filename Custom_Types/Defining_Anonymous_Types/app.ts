var todo: { name: string };

/*
If try to re-assign it it will some other object give error 
    Type '{ age: number; }' is not assignable to type '{ name: string; }'.
    Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'
*/
todo = { age: 41 }

function totalLength(x: { length: number }, y: { length: number }): number {
    var total: number = x.length + y.length;
    return total;
}