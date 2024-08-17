// Immediately Invoked Function Expressions (IIFE)

// jo function immediately excute ho jay aur sath he global scope ke palusoin se bachne k liye..

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('rustam')

