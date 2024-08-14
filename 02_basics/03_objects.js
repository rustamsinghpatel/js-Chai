// singleton -->  constructer se banega
// Object.create 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Rustam",
    "full name": "Rustam Patel",
    [mySym]: "mykey1",   //way use simble
    age: 30,
    location: "Rewa",
    email: "rustam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // lock unable change
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());