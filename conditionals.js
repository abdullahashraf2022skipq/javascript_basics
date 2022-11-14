var score = 40
if (score >= 50) {
    console.log("%cYou passed! Congratulations!", "color: green")
} else {
    console.log("%c You failed! Try again!", "color: red")
}

var position = "first"

if (position == "first") {
    console.log("You won a gold medal!")
} else if (position == "second") {
    console.log("You won a silver medal!")
} else if (position == "third") {
    console.log("You won a bronze medal!")
} else {
    console.log("You didn't win a medal")
}