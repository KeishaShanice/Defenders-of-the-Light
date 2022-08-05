let character = [
    {
        name: "Wizard",
        img: "images/wizard.png",
        health: 60,
        dice: 6
    }
]

let heroElementId = document.getElementById('hero');
let heroName = "Wizard"
let heroImg = "images/wizard.png"
let heroHealth = "60"
let heroDice = 6

let monsterElementId = document.getElementById('monster');
let monsterName = "Orc"
let monsterImg = "images/orc.png"
let monsterHealth = "10"
let monsterDice = 4

function renderCharacter(div, name, img, health, dice) {
    div.innerHTML = `
        <div class="character-card">
            <h4 class="name">${name} </h4>
            <img class="avatar" src="${img}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container"><div class="dice"> ${dice} </div></div>
        </div> 
    `
}

renderCharacter(heroDiv, heroName, heroImg, heroHealth, heroDice)
renderCharacter(monsterDiv, monsterName, monsterImg, monsterHealth, monsterDice)