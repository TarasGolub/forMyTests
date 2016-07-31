Object.prototype.hash = function(string) {
    var path = string.split('.');
    var temp= this;

    for (var i = 0; i < path.length; i++) {
        temp = temp[ path[i] ];
        // console.log(path[i]);
        if (!temp) return temp;
        // console.log(temp);
    }

    return temp;
};

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

console.log(obj.hash('person.name'));
// 'joe' 
// console.log(obj.person.history.bio);
console.log(obj.hash('person.history.bio'));
// { funFact: 'I like fishing.' }

console.log(obj.hash('person.history.homeStreet'));
 // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater'));
 // undefined