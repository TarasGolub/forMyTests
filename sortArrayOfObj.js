var OrderPeople = function(people){
  return people.sort( function(a,b) {
  	// console.log(a, b);
  	return a['age'] - b['age'];
  } ); //complete this function
}

var arr = [ { age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' } ];

console.log(arr);
console.log(OrderPeople(arr));

// var OrderPeople = function(people){
//   return people.sort( function(a,b) {
//   	return a-b;
//   } ); //complete this function
// }

// var arr = [ 44, 7,12, 89, 5, 2 ];

// console.log(arr);
// console.log(OrderPeople(arr));


