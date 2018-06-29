//lexical scope(static scope)
//gobal scope - defined outside of all code blocks
//local scope defined inside a code block

//global scope (varOne)
    //local scope (varTwo)
        //v4 ls
    //v3 ls

let varOne = 'varOne'

if (true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true){
        let varFour = 'varFour'
    }
}


if (true){
    let varThree = 'varThree'
}
console.log(varTwo)