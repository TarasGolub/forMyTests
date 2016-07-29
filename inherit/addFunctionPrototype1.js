Function.prototype.defer = function(time) {
    setTimeout(this, time);
};

Object.defineProperty(Function.prototype, 'defer', {enumerable: false} );


function f() {
console.log("привет" );
}

f.defer(1000);