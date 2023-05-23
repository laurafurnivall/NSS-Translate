// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")

//die objects
const toString = (die) => {
    switch (die) {
        case 1: return "one"
        case 2: return "two"
        case 3: return "three"
        case 4: return "four"
        case 5: return "five"
        case 6: return "six"
        default: return "Unknown"
    }
}

//function to roll die

const Roll = () => {
    const dieValue = Math.floor(Math.random() * 6) + 1
    let die = dieValue
    return die
}

//roll die, recieve messages based on outcome
for (let i = 0; i < 10; i++) {
    const dieOne = Roll();
    const dieTwo = Roll();

    let message = `${toString(dieOne)} + ${toString(dieTwo)} = ${dieOne + dieTwo}`

    if (dieOne === dieTwo) {
        message += " Doubles!"
    }
    console.log(message)
}



