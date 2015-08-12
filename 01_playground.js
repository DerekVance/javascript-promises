var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users')
// console.log(users.remove({}));
var promise = users.remove()
console.log(promise.then.toString());

users.remove({}).then(function () {
  return users.insert({name: 'Joe'})
}).then(function () {
  return users.insert({name: 'Sue'})
}).then(function (records) {
  console.log(records);
  db.close()
})
