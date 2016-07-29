function User(fullName) {
  this.fullName = fullName;
  
  Object.defineProperty(this, "age", {
  	get: function() {
  		return this.fullName.split(' ')[0];
  	}

  }
}

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

console.log( vasya.fullName ); // Василий Сидоров