function User() {
  /* ваш код */
  var surname, firstName;

  this.setSurname = function(name) {
  	surname = name;
  }

  this.setFirstName = function(name) {
  	firstName = name;
  }

  this.getFullName = function() {
  	return surname + ' ' + firstName
  }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

console.log( user.getFullName() ); // Петя Иванов