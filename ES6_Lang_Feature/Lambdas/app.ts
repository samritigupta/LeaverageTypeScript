// Lambdas = arrow function
var container = document.getElementById('container');

function Counter(el) {

    this.count = 0;

    el.innerHTML = this.count;

    // let _this = this;

    el.addEventListener('click', 
        (event) => el.innerHTML = (this.count += 1)
        /*
        // if we click dic it gives NaN, if we use this. need to save this reference outside event and use that for required functionality. this is a global scope in term of browser.
        function(){
            _this.count += 1;
            el.innerHTML = _this.count;
        }
        */
    )
}

new Counter(container);

var filtered = [1,2,3].filter(x => x > 0)