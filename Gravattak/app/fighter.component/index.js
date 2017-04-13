import template from './fighter.html';
import css from './fighter.css';
import md5 from 'md5';

class controller {

    $onInit() {
        this.damages = 0;
        this.md5 = md5(this.email);
        this.life = 20 + Math.floor(Math.random() * 30);
        this.mana = 20;
    }

    fight() {
        this.onFight({
            $event: { damages:(1 + Math.floor(Math.random() * 5))}
        });
    }

    bigfight() {
        this.mana -= 30
        this.onFight({
            $event: {damages: 10 * (1 + Math.floor(Math.random() * 5))}
        });
    }

    getMana() {
        this.mana += 20;
        this.afterInjured();
    }

    zonalAttack(){

        this.onFight({
            $event: {zone:true, damages: 3 * (1 + Math.floor(Math.random() * 5))}
        });

    }

    suffer() {

        this.getTarget({
            $event: this.email
        })

        this.life = Math.max(this.life - this.damages, 0);
        this.afterInjured();
    }

     

}

export const FighterComponent = {
    bindings: {
        email: '<',
        onFight: '&',
        afterInjured: '&',
        mode: '<',
        damages: '<',
        attack: '<',
        getTarget:"&",
    },
    template,
    controller,
}