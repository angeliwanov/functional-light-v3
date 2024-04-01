"use strict";

function not(predicate) {
	return function negated(...args) {
		return !predicate(... args);
	}
}

function when(fn) {
	return function(predicate) {
		return function(...args) {
			if (predicate(...args)) {
				return fn(...args);
			}
		}
	}
}




const output = console.log.bind(console)
const printIf = when(output);
const isLongEnough = not(isShortEnough);

function isShortEnough(str) {
	return str.length <= 5;
}

// function output(txt) {
// 	console.log(txt);
// }


// function printIf(shouldPrintIt) {
// 	return function(msg) {
// 		if (shouldPrintIt(msg)) {
// 			output(msg);
// 		}
// 	};
// }





// function isLongEnough(txt) {
// 	return !isShortEnough(txt)
// }


var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
