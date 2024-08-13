// array - collection of multipul items in single variables

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj" , "Hanuman"]

const myArr2 = new Array(1, 2, 3, 4) // objective way
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // add start valu
// myArr.shift() //  remove starting v

// console.log(myArr.includes(9)); // find valu
// console.log(myArr.indexOf(3)); //  -1 mense not exist


// const newArr = myArr.join() // join add the all element of an arrey into a string

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);


// slice, => returns a section copy of arrey
// splice ==> Also manupulate Orignal array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // 1, 2 add 3 add nhe hoga

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // isme 3 bhi add hoga AUR ORIGINAL ARRAY BHI MAINIPULEATE GOGA

console.log("C ", myArr);
console.log(myn2);
