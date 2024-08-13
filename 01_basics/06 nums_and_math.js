const score = 400
// console.log(score);

const balance = new Number(100) //100% number type
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  //100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
 // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // abslute valu - valu go to positive
// console.log(Math.round(4.6)); // round of // 4.3= 4, 4.6 = 5
// console.log(Math.ceil(4.2)); // ceil(top) -->> 4.2 = 5 
// console.log(Math.floor(4.9)); // down valu --> 4.9 =4
// console.log(Math.min(4, 3, 6, 8)); // lovest valu = 3
// console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random());  // valu comes 0 to 1 
console.log((Math.random()*10) + 1); //mim 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 