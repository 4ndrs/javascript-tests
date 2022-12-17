#!/usr/bin/env node
// They have their own lexical environment!
// can make ids with these in React apps!

const makeCounter = () => {
  let counter = 0;
  return () => counter++;
};

counter1 = makeCounter();

console.log("counter 1: ", counter1());
console.log("counter 1: ", counter1());
console.log("counter 1: ", counter1());

counter2 = makeCounter();

console.log("counter 2: ", counter2());
console.log("counter 2: ", counter2());
console.log("counter 2: ", counter2());
console.log("counter 1: ", counter1());
console.log("counter 1: ", counter1());
console.log("counter 2: ", counter2());
console.log("counter 2: ", counter2());

counter3 = makeCounter();

console.log("counter 3: ", counter3());
console.log("counter 2: ", counter2());
console.log("counter 3: ", counter3());
console.log("counter 1: ", counter1());
