function unique(arr) {
    var obj = {}, arr2 = [];

    for (var i = 0; i < arr.length ; i++) {
        var k = arr[i].toLowerCase();
        obj[k] = arr[i];
    }

    for (key in obj) {
        arr2.push(obj[key]);
    }

    return arr2;
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"];

console.log( unique(strings) ); // кришна, харе, 8-()