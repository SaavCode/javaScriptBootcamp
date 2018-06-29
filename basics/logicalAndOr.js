//node logicalAndOr.js

let temp = 1000
if (temp >= 60 && temp <= 90){
    console.log('It is really nice outside')
}

else if (temp <= 0 || temp >= 120){
    console.log('do not go outside')
}

else {console.log('do what you want'
)}

//challenge

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan){
console.log('eat grass')
}
else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('you eat grass & you eat meat')

}
else {
    console.log('you want both')
}