const accountId = 12355
let accountEmail = "sket.@google.com"
var accountPassword = "1256"
accountCity = "jaipur"
let accountstate

// accountId = 2  // not allowed 
console.log(accountId)
// const accountId = 12355   // gives error
accountEmail = "hduudb@google.com"
accountPassword = "7890"
accountCity = "delhi"
/*
prefer not to use var
because of issue in block scop and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate ])
