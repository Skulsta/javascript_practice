/*jshint devel: true */
"use strict";


var myMessage = 'A message';

function printStuff() {
  myMessage = 'Testing 123';
  console.log(myMessage);
  var myMessage;
}
printStuff();
console.log(myMessage);

var something = 'wah';

console.log(something);