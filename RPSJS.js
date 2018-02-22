function attackChoice() {
    choice = Math.floor((Math.random() * 10) + 1)
    if (choice <= 3) {
        console.log("Ninja")
        choice = "Ninja"
    } else if (choice > 3 && choice <= 6) {
        console.log("Outlaw")
        choice = "Outlaw"
    } else if (choice > 6 && choice <= 9) {
        console.log("Barbarian")
        choice = "Barbarian"
    } else if (choice == 10) {
        attackChoice()
    }
}

countWin = 0
countLoss = 0
countTie = 0
function addPoints() {
    if (result == "win") {
        countWin += 1
        adding = document.getElementById("wins") 
        adding.innerHTML = "Wins: " + countWin
        console.log("Wins: " + countWin)
    } else if (result == "lose") {
        countLoss += 1
        adding = document.getElementById("losses") 
        adding.innerHTML = "Losses: " + countLoss
        console.log("Losses: " + countLoss)
    } else if (result == "tie") {
        countTie += 1
        adding = document.getElementById("ties") 
        adding.innerHTML = "Ties: " + countTie
        console.log("Ties: " + countTie)
    }
}

function choiceNinja() {
    attackChoice()
    pick = "Ninja"
    ending = document.getElementById("ending")
    if (choice == "Ninja") {
        console.log("Tie!")
        result="tie"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    } else if (choice == "Outlaw") {
        console.log("You win!")
        result="win"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    } else if (choice == "Barbarian") {
        console.log("I win!")
        result="lose"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    }
    addPoints()
}

function choiceOutlaw() {
    attackChoice()
    pick = "Outlaw"
    ending = document.getElementById("ending")
    if (choice == "Ninja") {
        console.log("I win!")
        result="lose"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    } else if (choice == "Outlaw") {
        console.log("Tie!")
        result="tie"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    } else if (choice == "Barbarian") {
        console.log("You win!")
        result="win"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    }
    addPoints()
}

function choiceBarbarian() {
    attackChoice()
    pick = "Barbarian"
    ending = document.getElementById("ending")
    if (choice == "Ninja") {
        console.log("You win!")
        result="win"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    } else if (choice == "Outlaw") {
        console.log("I win!")
        result = "lose"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    } else if (choice == "Barbarian") {
        console.log("Tie!")
        result = "tie"
        ending.innerHTML = "You chose " + pick + " and the computer chose " + choice + ", so you " + result + "!"
    }
    addPoints()
}

function reset() {
    resetWins = document.getElementById("wins")
    countWins = 0
    resetWins.innerHTML = "Wins: " + countWins

    resetLosses = document.getElementById("losses")
    countLoss = 0
    resetLosses.innerHTML = "Losses: " + countLoss

    resetTies = document.getElementById("ties")
    countTies = 0
    resetTies.innerHTML = "Ties: " + countTies

    ending = document.getElementById("ending")
    ending.innerHTML = "You reset!"

    console.log("Reset Complete!")
}