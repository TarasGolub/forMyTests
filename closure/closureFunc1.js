var make_lazy = function () {
    if (arguments.length < 2) throw Error 
        ('Operating ant at least one operand must be');

    var args = arguments;
    var args2 = [].slice.call(arguments, 1);
    // console.log(args);

    return function(){
        return args[0].apply(args[0],args2);
    };
};

// var test = function () {
// console.log('test message');
// };
// var test_lazy = make_lazy(test, 1);
// console.log(test_lazy());


var double = function (n) {
    return n * 2;
};

var lazy_value = make_lazy(double, 5); //10
console.log(lazy_value());


var add = function (a, b) {
    return a + b;
};

var lazy_sum = make_lazy(add, 2, 3); //5
console.log(lazy_sum());

// console.log(make_lazy());

