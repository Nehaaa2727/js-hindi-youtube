const accountId = 144567
let accountEmail = "nehawadhwa@27"
var accountPassword = "12345"
accountCity = "meerut"
let accountState ;

// accountId = 2 not allowed bcoz jumne accountId ko constant ke sth dia h

accountEmail = "hchc@.com"
accountPassword= "212121"
accountCity = "jaipur"

console.log(accountId);

/*
prefer not to use var bcoz of issue in block scope and functional scope*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
