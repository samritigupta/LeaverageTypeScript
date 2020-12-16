interface jQuery {
    (selector: string): HTMLElement;
    version: number;
}


var $ = <jQuery>function(selector: string) {
    // Find DOM element
}

$.version = 1.18   // function are nothing but also object/class so can use it like this

var container = $('#container');
