var OrderPeople = function(people){
    return people.sort( function(a,b) {
        // console.log(a, b);
        return a['age'] - b['age'];
    });
};

var arr = [ { age: 83, name: 'joel' },
    { age: 46, name: 'roger' },
    { age: 99, name: 'vinny' },
    { age: 26, name: 'don' },
    { age: 74, name: 'brendan' } ];

console.log(arr);
console.log(OrderPeople(arr));