/*jshint devel: true */
"use strict";

var a = 0;
var b = false;

function areEqual(x, y) {
  return x === y;
}

if(areEqual(a, b)) {
  console.log('a and b are equal!');
} else {
  console.log('a and b are not equal :(');
}