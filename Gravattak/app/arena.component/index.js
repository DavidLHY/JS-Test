import template from './arena.html';

class controller {

    $onInit() {
        this.team1 = {
            name: "Gentil",
            mode: 'attack',
            fighters: ['tmoyse@gmail.com', 'paolalambroni@gmail.com', 'dark.pl@hotmail.fr', 'alouest_44@yahoo.fr']
        };
        this.team2 = {
            name: "Mechant",
            mode: 'defense',
            fighters: ['gigarelt@gmail.com', 'pouletguerrier@gmail.com', 'lehardy.david@live.fr', 'lionel.collidor2016@campus-eni.fr']
        };
        this.attack = false;
        this.targeted = false;

    }

    setDamages(damages) {

        console.log("setDamages")
        this.damages = damages.damages;
        this.zone = damages.zone;
        this.attack = true;

    }

    attackEnd(email) {

        this.attack = false;
        this.targeted = false;
        this.damages = 0;

        if(email.mail === this.email || email.mana)
        {
        this.team1.mode = this.team1.mode === 'defense' ? 'attack' : 'defense';
        this.team2.mode = this.team2.mode === 'defense' ? 'attack' : 'defense';
        }
    }

    getTarget(email) {
        this.email = email;
        this.targeted = true;
        this.index = (this.team2.fighters.indexOf(email) !== -1)
            ? this.team2.fighters.indexOf(email)
            : this.team1.fighters.indexOf(email);

    }

    getDamages(index) {

        //  console.log("getDamages",this.targeted,index)
        if (this.targeted) {
            if (this.zone) {
                if(Math.abs(index-this.index)<2 )
                {
                    return (2-Math.abs(index-this.index))*this.damages;
                }else{
                    return 0;
                }
                

            } else {
                if (index === this.index) {
                    console.log("getDamages", this.targeted, index, this.damages)
                    return this.damages;
                } else {
                    return 0;
                }
            }
        } else {
            return 0;
        }
    }

}

export const ArenaComponent = {
    bindings: {},
    controller,
    template,
}