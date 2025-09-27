// Array spread
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4,5,6]

// Object spread
const user = {name: "Ayo"};
const details = {age: 21};
const fullUser = {...user, ...details};
console.log(fullUser); // {name:"Ayo", age:21}
