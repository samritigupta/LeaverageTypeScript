// type inference
// Type inference is the ability to automatically deduce, either partially or fully, the type of an expression at compile time.
function totalLength(x, y) { // type of x and y: any(most dynamic and unrestricted type)
    var total = x.length + y.length;
    return total;   // return type number
}