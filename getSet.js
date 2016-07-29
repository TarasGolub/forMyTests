function User(fullName) {
  this.fullName = fullName;
  
  Object.defineProperty(this, "firstName", {
  	get: function() {
  		return this.fullName.split(' ')[0];
  	},

  	set: function(name) {
  		this.fullName = name + ' ' + this.fullName.split(' ')[1];
  	}

  });

  Object.defineProperty(this, "lastName", {
  	get: function() {
  		return this.fullName.split(' ')[1];
  	},

  	set: function(name) {
  		this.fullName = this.fullName.split(' ')[0] + ' ' + name;
  	}

  });
}

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

console.log( vasya.fullName ); // Василий Сидоров