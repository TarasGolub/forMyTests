function aclean(arr) {
	var obj = {}, arr2 = [];
	
	for (var i = 0; i < arr.length ; i++) {
		var k = arr[i].toLowerCase().split('').sort().join('');
		// console.log(arr[i]);
		obj[k] = arr[i];
	}

	
	for (key in obj) {
		arr2.push(obj[key]);
	}

	return arr2;



}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log( aclean(arr) );