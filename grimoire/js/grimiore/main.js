// Put your code here

console.log("Do you believe in magic?")
console.log("------------------------")

//create object function
const GetAllSpells = () => {
    return [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ]
}

//variable of function
const allSpells = GetAllSpells()


//function to make Evil Book
const MakeEvilSpellBook = (allSpells) => {
    let evilBook = {}
    evilBook.Title = "Evil Book"
    evilBook.Spells = allSpells.filter((spell) => {
        if (spell.IsEvil === true) {
            return spell
        }
    })

    return evilBook

}

//function to make Good Book
const MakeGoodSpellBook = (allSpells) => {
    let goodBook = {}
    goodBook.Title = "Good Book"
    goodBook.Spells = allSpells.filter((spell) => {
        if (spell.IsEvil === false) {
            return spell
        }
    })
    return goodBook

}

//function to display both books

const DisplaySpellBook = (book) => {
    console.log(book.Title)
    for (const spell of book.Spells) {
        console.log(`${spell.Name}`)
    }
}


//call goodbook, evil book
const goodbook = MakeGoodSpellBook(allSpells)
const badbook = MakeEvilSpellBook(allSpells)

//display good/evil book with space between
DisplaySpellBook(goodbook)
DisplaySpellBook(badbook)


