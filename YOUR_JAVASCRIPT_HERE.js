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
};

var weapon =
{ "type" : "dagger" , "damage" : 2 
};

var testweapon = 
{ "type" : "test" , "damage" : 0
};


function rest(hero) {
    hero.health = 10
        if (hero.health == 10){
        alert('health is already 10')
        return(hero)
}

}

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon);
}


function equipWeapon(hero) {

    if(hero.inventory.length > 0){ 
    hero.weapon = hero.inventory[0];
    hero.inventory[0] = weapon;
}


function equipWeapon(testweapon){
    hero.inventory[0] = testweapon;
    }

}