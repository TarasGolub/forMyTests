function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    //    this.fullName = this.firstName + ' ' + this.lastName;

    Object.defineProperty(this, 'fullName', {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      
      set: function(newFullName) {
        var newName = newFullName.split(' ');
        if  (newName[0] && newName[1] && newName.length == 2) 
        {
          this.firstName = newName[0];
          this.lastName = newName[1];
        }
      }

    });
}

var namedOne = new NamedOne("Naomi","Wang");

namedOne.firstName = "John";
namedOne.lastName = "Doe";
// ...then...
console.log(namedOne.fullName);
 // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith";
// ...then...
console.log(namedOne.firstName);
 // -> "Bill"
console.log(namedOne.lastName );
 // -> "Smith"

// -- But :
namedOne.fullName = "Tom" ;
// -> no : lastName missing
namedOne.fullName = "TomDonnovan";
 // -> no : no space between first & last names
console.log(namedOne.fullName );
// -> "Bill Smith" (unchanged)