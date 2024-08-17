const user = {
    username: "rustam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // browser in side window obj. but node invarment empty obj.

// function chai(){   //this context work inside object not work function
//     let username = "rahul"
//     console.log(this.username);
// }

// chai()

// const chai = function () {  
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {  
    let username = "hitesh"
    console.log(this);
}


// chai()



// const addTwo = (num1, num2) => { //basic arrow function explecity
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // impleysite return method (no need return)

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "rustam"}) //object ko lagana padega {}


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()