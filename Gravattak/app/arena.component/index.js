import template from './arena.html';

class controller {

    $onInit() {
        this.team1 = {
            name: "Gentil",
            mode: 'attack',
            fighters: ['tmoyse@gmail.com', 'paolalambroni@gmail.com','dark.pl@hotmail.fr','alouest_44@yahoo.fr']
        };
        this.team2 = {
            name: "Mechant",
            mode: 'defense',
            fighters: ['gigarelt@gmail.com', 'pouletguerrier@gmail.com','lehardy.david@live.fr','lionel.collidor2016@campus-eni.fr']
        };
        this.attack = false;

    }

    setDamages(damages) {
        

        this.damages = damages.damages;
        this.zone = damages.zone;
        this.attack = true;


    }

    attackEnd() {

        this.attack = false;
        this.damages = 0;
        // @TODO refacto
        this.team1.mode = this.team1.mode === 'defense' ? 'attack' : 'defense';
        this.team2.mode = this.team2.mode === 'defense' ? 'attack' : 'defense';
    }

    getTarget(email)
    {
        this.email =email;

        this.index = fighters.indexOf(email);
        console.log(this.index);
    }

    

}

export const ArenaComponent = {
    bindings: {},
    controller,
    template,
}