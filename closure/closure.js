function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        callbacks.push(constFunc(i));
    }

    return callbacks;

    function constFunc(v) {
        return function() {return v;};
    }
}

var callBack = createFunctions(10);
console.log(callBack[6]());