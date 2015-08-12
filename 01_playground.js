var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users')
// console.log(users.remove({}));
var promise = users.remove()
console.log(promise.then.toString());
