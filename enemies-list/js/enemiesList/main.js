// Put your code here

console.log("My Enemies List!")
console.log("----------------")

const getEnemies = () => {
    return [
        {
            FirstName: "Joshua",
            LastName: "Flowers",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            isReallyHated: true
        },
        {
            FirstName: "Darth",
            LastName: "Vader",
            Offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            isReallyHated: false
        },
        {
            FirstName: "Betty",
            LastName: "Rudelady",
            Offenses: [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
            ],
            isReallyHated: true
        },
        {
            FirstName: "Leon",
            LastName: "Peck",
            Offenses: [
                "Keeps giving me a hotplate"
            ],
            isReallyHated: false
        }
    ]
}

const enemies = getEnemies()

for (const enemy of enemies) {
    if (enemy.isReallyHated) {
        console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really dislike!)`)
    } else {
        console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
}
