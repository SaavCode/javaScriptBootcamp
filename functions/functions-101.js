//function - input , code , output

let greetUser = function (){
    console.log('welcome user!')
}

greetUser()

let square = function(num)
{
    let result = num * num
    return result
}


let value = square(3)
let otherValue = square(5)
console.log(value)
console.log(otherValue)

//challenge 


//convertFahrenheitToCelcius

// call a couple of times ()

//print the converted values

let fToC = function(tempF){

let tempC = (tempF - 32) * 5 / 9
return tempC
}
let celciusTemp = fToC(32)
console.log(celciusTemp)
let celciusTemp1 = fToC(68)
console.log(celciusTemp1)