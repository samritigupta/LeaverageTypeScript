// Specifying function parameter types
// union types string | any[] means x can be string or array
function totalLength(x: (string | any[]), y: (string | any[])): number {
    var total: number = x.length + y.length;  // it does not make sense to add string and array length. hence, union is also not that restrictive.
    
    x.slice(0)
    
    if(x instanceof Array) {
        x.push('TypeScript')
    }
    
    if(x instanceof String) {
        x.substr(0)
    }
    
    return total;
}
