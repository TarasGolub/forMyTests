function filter(arr, func) {
	var res = [];

	for (var i = 0; i < arr.length; i++) {
	if (func(arr[i])) res.push(arr[i]);
	}

	return res;
}


function inBetween(a,b) {
	return function(x) {
		return x >= a && x <=b;
	}
}

function inArray(arr) {
	return function(a) {
		return (arr.indexOf(a) == -1) ? 0 : 1;
		// return (arr.indexOf(a) !== -1);
	}
}


/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2