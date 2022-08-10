// let character = [
//     {
//         ElementId: document.getElementById('hero'),
//         name: "Wizard",
//         img: "images/wizard.png",
//         health: 60,
//         dice: 6
//     },

//     {
//         elementId: document.getElementById('monster'),
//         name: "Monster",
//         img: "images/orc.png",
//         health: 10,
//         dice: 64
//     }
// ]

const hero =
{
    elementId: document.getElementById('hero'),
    name: "Wizard",
    img: "images/wizard.png",
    health: 60,
    diceRoll: [3,1,4],
    diceCount: 3
}

const monster =
{
    elementId: document.getElementById('monster'),
    name: "Monster",
    img: "images/orc.png",
    health: 10,
    diceRoll:[2],
    diceCount: 1
}

function renderCharacter(data) {
    const {elementId, name, img, health, diceRoll, diceCount} = data;

    let diceHtml = "";
    for(let i = 0; i < diceCount; i++){
            diceHtml += `<div class="dice">${diceRoll[i]}</div>`
    }


    elementId.innerHTML = `
        <div class="character-card">
            <h4 class="name">${name} </h4>
            <img class="avatar" src="${img}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                ${diceHtml }
            </div>
        </div> 
    `
}

renderCharacter(hero)
renderCharacter(monster)