Array.prototype.reverse = function() {
  // ...for
 var arr = this;

 for (var i = 0, j = arr.length - 1; i <  arr.length / 2; i++, j--) {
    var a;
    a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
 }
 return arr;
};

console.log([1, 2, 3, 4].reverse(), [4,3,2,1]);
console.log(["a", "b", "c"].reverse(), ["c", "b", "a"]);
console.log([].reverse(), []);
