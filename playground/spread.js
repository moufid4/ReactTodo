// function add (a, b) {
//   return a + b;
// }
//
// // console.log(add(3,1));
//
// var toAdd = [1, 2];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [3, ...groupA,...groupB];
//
// console.log(final)

var person = ['Moufid', 33];
var personTwo = ['Mou', 25];

function greeting (name, age) {
  return "Hi " + name + "," + "you are " + age;
}

console.log(greeting(...person))
