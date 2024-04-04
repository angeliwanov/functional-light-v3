"use strict";

// Put your code here! :)
function five () {return 5};
function ten () {return 10};

function add(x,y) {
  return x + y;
}

console.log((add(five(), ten())));

function add2(fn1, fn2) {
  return add(fn1(), fn2())
}

console.log((add2(five, ten)));

function constant (value) {
  return function fn() {
    return value
  } 
}

console.log(add2(constant(5), constant(10)))

function addn (...fns) {
  while(fns.length > 2) {
    let [fn1,fn2, ...rest] = fns;
    fns = [function f() { return add2(fn1, fn2)}, ...rest]
  }

  return add2(fns[0], fns[1])
}

console.log(addn(constant(5), constant(10), constant(15)))

function addnRecursion (...fns) {
  if (fns.length == 2) return add2(fns[0], fns[1]);
  let [fn1, fn2, ...rest] = fns;
  return addnRecursion(function f() {return add2(fn1, fn2)}, ...rest)
}

console.log(addnRecursion(constant(5), constant(10), constant(15)))

function addnReduce(fns) {
  return fns.reduce((accFn, valFn) => {
    return function f() {
      return add2(accFn, valFn)
    }
  })()
}

console.log(addnReduce([constant(5), constant(10), constant(15)]))

const numbers =[12,2,4,3,6,8,6,4,3,5,2,5,7,4,7,8,4,1,4];

console.log(addnReduce(
numbers
.reduce(function unique(newArr, num) {
  if (!newArr.includes(num)) return [...newArr, num];
  return newArr;
},[])
.filter(function isEven(v) {return v%2===0})
.map(v => constant(v))
))