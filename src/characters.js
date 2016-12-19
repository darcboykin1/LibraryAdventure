class Character {
    constructor(name, health, maxhealth, attack, defense, potions, alive) {
        this.name = name;
        this.health = health;
        this.maxhealth = maxhealth;
        this.attack = attack;
        this.defense = defense;
        this.potions = potions;
        this.alive = true;
    }
    fight(target) {
        $('#command').remove();
        let roll = Math.floor(Math.random() * 4);
        if (roll <= 2.8) {
            $('#james').animate({ left: '-=20px', top: '-=30px' }, 100);
            $('#james').animate({ left: '-=20px', top: '+=30px' }, 100);
            $('#james').animate({ left: '+=20px', top: '-=30px' }, 100);
            $('#james').animate({ left: '+=20px', top: '+=30px' }, 100);
            let announce = $('<div />').attr('id', 'announcement');
            let dmg = this.attack + (Math.floor(Math.random() * (this.attack - target.defense)));
            target.health -= dmg;
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' attacked ' + target.name + ' and did ' + dmg + ' damage!').delay(2000).fadeOut();
            if (target.health <= 0) {
                $(announce).text(this.name + ' defeated ' + target.name + ' ! ');
                $('#sorefuji').delay(500).fadeOut();
            } else {
                eneAct();
            }
        } else if (roll > 2.8) {
            $('#james').animate({ left: '-=400px', top: '-=250px' }, 3000);
            $('#james').animate({ left: '-=400px', top: '+=250px' }, 100);
            $('#james').animate({ left: '+=400px', top: '-=250px' }, 100);
            $('#james').animate({ left: '+=400px', top: '+=250px' }, 100);
            let announce = $('<div />').attr('id', 'announcement');
            let dmg = this.attack + (Math.floor(Math.random() * (this.attack - target.defense) * 2.5));
            target.health -= dmg;
            $('.message-wrapper').html(announce);
            $('#james').removeClass('jamesattack');
            $(announce).text(this.name + ' attacked ' + target.name + ' and scored a critical hit for ' + dmg + ' damage!').delay(2000).fadeOut();
            if (target.health <= 0) {
                $(announce).text(this.name + ' defeated ' + target.name + ' ! ');
                $('#sorefuji').delay(500).fadeOut();
            } else {
                eneAct().delay(4000);
            }
        }
    }
    potion() {
        $('#command').remove();
        if (this.health == this.maxhealth) {
            var announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' has full health!').delay(2000).fadeOut();
            eneAct();
        } else if (this.potions === 0) {
            let announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' has no potions!').delay(2000).fadeOut();
            eneAct();
        } else if (this.health > (this.maxhealth - 60) && this.health < this.maxhealth) {
            let announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            let aid = (this.maxhealth - this.health);
            this.health += aid;
            $(announce).text(this.name + ' healed ' + aid + ' HP').delay(2000).fadeOut();
            this.potions -= 1;
            eneAct();
        } else if (this.potions > 0) {
            let announce = $('<div />').attr('id', 'announcement');
            $('.message-wrapper').html(announce);
            this.health += 60;
            this.potions -= 1;
            $(announce).text(this.name + ' healed 60 HP!').delay(2000).fadeOut();
            eneAct();
        }
    }
}

class enemy extends Character {
    constructor(name, health, maxhealth, attack, defense, alive) {
        super(name, health, maxhealth, attack, defense);
    }
    fight(target) {
        let roll = Math.floor(Math.random() * 4);
        if (roll <= 2) {
            $('#sorefuji').animate({ left: '+=20px', top: '-=30px' }, 100);
            $('#sorefuji').animate({ left: '+=20px', top: '+=30px' }, 100);
            $('#sorefuji').animate({ left: '-=20px', top: '-=30px' }, 100);
            $('#sorefuji').animate({ left: '-=20px', top: '+=30px' }, 100);
            var announce = $('<div />').attr('id', 'announcement');
            let dmg = this.attack + (Math.floor(Math.random() * (this.attack - target.defense)));
            target.health -= dmg;
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' attacked ' + target.name + ' and did ' + dmg + ' damage!').delay(2000).fadeOut();
            if (target.health <= 0) {
                $(announce).text(this.name + ' defeated ' + target.name + ' ! ');
                $('#james').delay(500).fadeOut();
            } else {
                act();
            }
        } else if (roll > 2) {
            $('#sorefuji').animate({ left: '+=20px', top: '-=30px' }, 50);
            $('#sorefuji').animate({ left: '+=20px', top: '+=30px' }, 50);
            $('#sorefuji').animate({ left: '+=20px', top: '-=30px' }, 50);
            $('#sorefuji').animate({ left: '+=20px', top: '+=30px' }, 50);
            $('#sorefuji').animate({ left: '+=610px' }, 100);
            $('#sorefuji').animate({ left: '-=15px' }, 75);
            $('#sorefuji').animate({ left: '+=15px' }, 75);
            $('#sorefuji').animate({ left: '-=15px' }, 75);
            $('#sorefuji').animate({ left: '+=15px' }, 75);
            $('#sorefuji').animate({ left: '-=15px' }, 75);
            $('#sorefuji').animate({ left: '+=15px' }, 75);
            $('#sorefuji').animate({ left: '-=690px' }, 500);
            let announce = $('<div />').attr('id', 'announcement');
            let dmg = this.attack + (Math.floor(Math.random() * (this.attack - target.defense) * 2));
            target.health -= dmg;
            $('.message-wrapper').html(announce);
            $(announce).text(this.name + ' used gambling flurry on ' + target.name + ' for ' + dmg + ' damage!').delay(2000).fadeOut();
            if (target.health <= 0) {
                $(announce).text(this.name + ' defeated ' + target.name + ' ! ' + ' Game Over!! ');
                $('#james').delay(500).fadeOut();
            } else {
                act();
            }
        }
    }
}


let James = new Character('James', 420, 420, 25, 36, 5);
let Sorefuji = new enemy('Sorefuji', 390, 390, 29, 29);

let decision = ['Attack', 'Use Potion'];

function playerAction() {
    let commWindow = $('<div />').attr('id', 'command');
    $('body').append(commWindow);
    let selections = $('<ul />').attr('id', 'selections');
    $('#command').append(selections);
    for (let decisions of decision) {
        // let decisions = $('<li />').html(dec)
        $('#command ul').append(`<li class="">${decisions}`);
    }
    $('ul li').first().on('click', function() { James.fight(Sorefuji); });
    $('ul li:nth-of-type(2)').on('click', function() { James.potion(); });
}

function enemyAction() {
    Sorefuji.fight(James);
}

function act() { setTimeout(function() { playerAction(); }, 2000); }

function eneAct() { setTimeout(function() { enemyAction(); }, 2000); }

act();

var audio = new Audio('/Users/student_26/ga/projects/LibraryAdventure/assets/exhaust.mp3');
audio.oncanplaythrough = function() {
    audio.play();
};
audio.loop = true;
audio.onended = function() {
    audio.play();
};
