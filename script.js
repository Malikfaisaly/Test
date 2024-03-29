"use strict";
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const newObj = Object.assign({},obj1,obj2);
console.log(newObj); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }