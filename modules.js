//maths.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
//main.js
import { add, multiply } from './math.js';

console.log(add(5, 3));      // 8
console.log(multiply(5, 3)); // 15
