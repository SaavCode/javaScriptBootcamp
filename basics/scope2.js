// Global
  // Local
    // Local (name)
  // Local

///let name = 'Andrew'

if (true) {
    //let name = 'Mike'
//variable shadowing
    if (true) {
        let name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}