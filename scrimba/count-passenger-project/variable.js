// Exercise Create variable and then concatenate 
const firstName = 'Kridchasorn'
const lastName = 'Pramsrilo'
const fullName = `${firstName} ${lastName}`
// console.log(fullName)

let name ='John'
let greeting = 'Hi there'

const sayHi = () => {
    return `${greeting}, ${name}!`
}
// console.log(sayHi())

let myPoints = 3

const add3Points = () => {
    return myPoints += 3
}

const remove1Point = () => {
    return myPoints -= 1
}

add3Points()
add3Points()
remove1Point()
add3Points()
remove1Point()
// console.log(myPoints)

// String and Number (string always win)
/*
console.log("2" + 2) //output: 22
console.log(11 + 7) //output: 18
console.log(6 + "5") //output: 65
console.log("My points: " + 5 + 9) //output My points: 59
console.log(2 + 2) // output: 4
console.log("11" + "14") //output: 1114
*/