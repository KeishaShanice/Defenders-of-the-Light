const characterData = {
    hero:
    {
        name: "Wizard",
        img: "images/wizard.png",
        health: 60,
        diceCount: 3,
        currentDiceScore: []
    },
    
    monster:
    {
        name: "Monster",
        img: "images/orc.png",
        health: 10,
        diceCount: 1,
        currentDiceScore: []
    }
}

export {characterData};
//export default only allow you to export one thing
//named exports cannot be changed in other files