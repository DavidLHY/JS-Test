import { uniq } from 'lodash';
import { shuffle } from 'lodash';

export class RecipesService {
    constructor($http, $q, API_URL) {
        this.$http = $http;
        this.$q = $q;
        this.API_URL = API_URL;
       

    }

    getRecipes() {
        return this.$http.get(this.API_URL)
            .then(response => response.data)
    }

    getRecipe(name) {
        return this.getRecipes()        
        .then(rps=> rps.filter(rp => rp.name== name )[0]);
       // .then(a=> {console.log(a); return a;});
    }

    getToppings() {
        return this.getRecipes()
            .then(response => shuffle(uniq(response.reduce((a, v) => [...a, ...v.toppings], [])))

            )
    }


    getRandom() {

        return this.getRecipes()
            .then(rcps => {
                let rand = Math.floor(Math.random() * rcps.length);
                return rcps.filter(a => rcps.indexOf(a) === rand);
            })
            .then(rcp => rcp[0].name)
            ;

    }

    
   


}