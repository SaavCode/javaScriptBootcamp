let myAccount = {
    name: 'Andrew Chav',
    expenses: 0,
    income:0
}


let addEXpense = function(account, amount){
    account.expenses = account.expenses + amount
}

addEXpense(myAccount, 2.50)
console.log(myAccount)