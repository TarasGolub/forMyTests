function makeBuffer() { 
    var str = '';

    function buffer(inputStr) {
        if(arguments.length) {
            str += inputStr;
            return;
        } 
        return str;
    }

    buffer.clear = function() {str = '';};

    return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
console.log( buffer() );

buffer(' Использовать');
console.log( buffer() );

buffer(' Нужно!');
console.log( buffer() ); // Замыкания Использовать Нужно!