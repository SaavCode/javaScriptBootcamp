let isAccountLocked = false
let userRole = 'Admin'

if (isAccountLocked){

    console.log('account is locked')
}

else if (userRole === 'Admin'){
    console.log('welcome admin')
}
else {
    console.log('Welcome')
}

//challenge: check temperature


let temp = 80

if (temp <= 60){
    console.log('It is way too cold outside')
}
else if (temp >= 120){
    console.log('It is way too hot outside')
}
else {
    console.log('Lets go outside and play!')
}

