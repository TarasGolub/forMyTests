function Calculator() {
    this.read = function(){
        this.a = +prompt('Enter a:', '');
        this.b = +prompt('Enter b:', '');
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
