class Character {
    constructor(name, health, maxhealth, attack, defense) {
        this.name = name;
        this.health = health;
        this.maxhealth = maxhealth;
        this.attack = attack;
        this.defense = defense;
        this.potions = 5;
    }
    fight(target) {
        var announce = $('<div />').attr('id', 'announcement');
        let dmg = this.attack + (Math.floor(Math.random() * (this.attack - target.defense)));
        target.health -= dmg;
        $('body').append(announce);
        $(announce).append(this.name + ' attacked ' + target.name + ' and did ' + dmg + ' damage!');
    }
    defend() {
        console.log(`${this.name} defended against the attack!`);
    }
    potion() {
        if (this.health == this.maxhealth) {
            console.log(`${this.name} has full health!`);
        } else if (this.potions === 0) {
            console.log(`${this.name} has no potions left`);
        } else if (this.health > (this.maxhealth - 40) && this.health < this.maxhealth) {
            let aid = (this.maxhealth - this.health);
            this.health += aid;
            console.log(this.name + ' healed ' + aid + ' points of HP!');
        } else if (this.potions > 0) {
            this.health += 40;
            this.potions -= 1;
            console.log(`${this.name} healed 40 points of HP!`);
        }
    }
}



let James = new Character('James', 720, 720, 25, 36);
let Sorefuji = new Character('Sorefuji', 690, 690, 34, 18);

function playerAction() {
    let commWindow = $('<div />').attr('id', 'command');
    $('body').append(commWindow);
    let commSelect = $('<div />').attr('id', 'select');
    $('#command').append(commSelect);
}



function enemyAction() {

}
