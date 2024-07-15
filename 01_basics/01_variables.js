const accountId = 195
let accountEmail = "rustam@google.com"
var accountPassword = "123456"
accountCity = "Rewa"
let accountState;

// accountId = 2 // not allowed
/*
1.const -->> not changeble
2.let -->> prefrances
3.var -->> kae bar name{} scope k bahar bhi agr chanfe kro to bahut dikkt hoti the har jagh change ho jata tha isliye let use hone laga


*/
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
1.console.log([all variable])
2.{}
*/