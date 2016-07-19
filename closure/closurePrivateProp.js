// function createSecretHolder(secret) {
//   return {
//     getSecret: function() { return secret; },
//     setSecret: function(v) { secret = v; }
//   };
// }

function createSecretHolder(secret) {
  return {
    getSecret: function() {return secret;},
    setSecret: function(v) {secret = v;}
  }
}
var obj = createSecretHolder(5)
console.log(obj.getSecret()); //# returns 5
obj.setSecret(2)
console.log(obj.getSecret());  // # returns 2
console.log(obj.secret);