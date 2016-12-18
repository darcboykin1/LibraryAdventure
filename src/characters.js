class Character {
    constructor(name, health, maxhealth, attack, defense, potions) {
        this.name = name;
        this.health = health;
        this.maxhealth = maxhealth;
        this.attack = attack;
        this.defense = defense;
        this.potions = potions;
    }
    fight(target) {
        let roll = Math.floor(Math.random() * 4);
        if (roll < 3) {
            var announce = $('<div />').attr('id', 'announcement');
            let dmg = this.attack + (Math.floor(Math.random() * (this.attack - target.defense)));
            target.health -= dmg;
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' attacked ' + target.name + ' and did ' + dmg + ' damage!').delay(1500).fadeOut();
            eneAct();
        } else if (roll > 3) {
            var announce = $('<div />').attr('id', 'announcement');
            let dmg = this.attack + (Math.floor(Math.random() * (this.attack - target.defense)) * 1.8);
            target.health -= dmg;
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' attacked ' + target.name + ' and scored a critical hit for' + dmg + ' damage!').delay(1500).fadeOut();
            eneAct();
        }
    }
    defend() {
        console.log(`${this.name} defended against the attack!`);
    }
    potion() {
        if (this.health == this.maxhealth) {
            var announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' has full health!').delay(500).fadeOut();
        } else if (this.potions === 0) {
            var announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' has no potions!').delay(500).fadeOut();
        } else if (this.health > (this.maxhealth - 100) && this.health < this.maxhealth) {
            var announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            let aid = (this.maxhealth - this.health);
            this.health += aid;
            $(announce).text(this.name + ' healed' + aid + ' HP').delay(500).fadeOut();
        } else if (this.potions > 0) {
            var announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            this.health += 100;
            this.potions -= 1;
            $(announce).text(this.name + ' healed 100 HP!').delay(500).fadeOut();
            eneAct();
        }
    }
}



let James = new Character('James', 420, 420, 25, 36, 5);
let Sorefuji = new Character('Sorefuji', 390, 390, 34, 18, 2);

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
    Sorefuji.fight(James);
}


function act() { setTimeout(function() { playerAction() }, 500); };

function eneAct() { setTimeout(function() { enemyAction() }, 500); };
act();

var audio = new Audio('');
audio.oncanplaythrough = function() {
    audio.play();
}
audio.loop = true;
audio.onended = function() {
    audio.play();
}
