#!/usr/bin/env node
console.log("hello");
await new Promise((resolve) => setTimeout(resolve, 5000));
console.log("world");
