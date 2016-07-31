function Calculator() {
    var methods = {
        '+': function(a,b) {
            return a + b; 
        },

        '-': function(a,b) {
            return a - b;
        }
    };

    this.calculate = function(str) {
        var arr = str.split(' ');
        var a = +arr[0];
        var op = arr[1];
        var b = +arr[2];

        if(!op || isNaN(a) || isNaN(b) ) return 'Error: incorrect data';
        return methods[op](a, b);
    };

    this.addMethod = function(operand, func) {
        methods[operand] = func; 
    };
}


var calc = new Calculator();

console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("13 - 7") ); // 6

var powerCalc = new Calculator();
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8