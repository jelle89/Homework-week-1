// Write your JS here
var hero = {
    name: "piet",
    heroic: true,
    health: 10,
    inventory: [],
    weapon: {
        type: 'sword',
        damage: 2
    }
}


function rest(hero) {
    hero.health = 10
        if (hero.health == 10){
         alert('health is already 10')
         return(hero)
}

}

function pickUpItem() {}
function equipWeapon() {}
