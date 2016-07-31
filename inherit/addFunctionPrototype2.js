Function.prototype.defer = function(time) {
    var self = this;  // defer будет вызван на любой функции, соответственно - this тут и будет эта функция

    return function () {   // дабы мы могли вызвать функ с аргументами, например в 21 строке, возвращаем функцию.
        // var args = arguments; //  сохраняем ее аргументы (чтоб передать в f.apply)
        setTimeout(self.apply(null, arguments ), time); // $$$ !!! Зачем мы оборачиваем вызов f.apply в дополнительную анонимную функцию?
    };
};

Object.defineProperty(Function.prototype, 'defer', {enumerable: false} );

function f(a, b) {
    console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.