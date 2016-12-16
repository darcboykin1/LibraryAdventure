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
        $('.message-wrapper').html(announce);
        $(announce).text(this.name + ' attacked ' + target.name + ' and did ' + dmg + ' damage!').delay(1500).fadeOut();
    }
    defend() {
        console.log(`${this.name} defended against the attack!`);
    }
    potion() {
        if (this.health == this.maxhealth) {
            var announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' has full health!').delay(1500).fadeOut();
        } else if (this.potions === 0) {
            $(announce).text(this.name + ' has no potions!').delay(1500).fadeOut();
        } else if (this.health > (this.maxhealth - 40) && this.health < this.maxhealth) {
            let aid = (this.maxhealth - this.health);
            this.health += aid;
            $(announce).text(this.name + ' healed' + aid + ' HP').delay(1500).fadeOut();
        } else if (this.potions > 0) {
            this.health += 40;
            this.potions -= 1;
            $(announce).text(this.name + ' healed 40 HP!').delay(1500).fadeOut();
        }
    }
}



let James = new Character('James', 420, 420, 25, 36);
let Sorefuji = new Character('Sorefuji', 390, 390, 34, 18);

let decision = ['Attack', 'Use Potion']

function playerAction() {
    let commWindow = $('<div />').attr('id', 'command');
    $('body').append(commWindow);
    let selections = $('<ul />').attr('id', 'selections');
    $('#command').append(selections);
    for (decisions of decision) {
        // let decisions = $('<li />').html(dec)
        $('#command ul').append(`<li class="">${decisions}`);
    }
    $('ul li').first().on('click', function() { James.fight(Sorefuji) });
    $('ul li:nth-of-type(2)').on('click', function() { James.potion() });
}



function enemyAction() {

}

playerAction();
