import { uniq } from 'lodash';

let cacheRecipes;

export class RecipeService {

    getRecipes() {
        if (!cacheRecipes) {
            //console.log(cacheRecipes);
            return fetch('http://localhost:3000/recipes')
                .then(response => response.json())
                .then(recipes => {
                    cacheRecipes = recipes;
                    return recipes;
                });
        } else {
            return Promise.resolve(cacheRecipes);
        }

    }

    getRecipe(name) {
        return this.getRecipes()         
         .then(recps=>   recps.find(rcp => rcp.name === name) );
        

    }

    getRandom() {

        return this.getRecipes()
            // .then(a=>{console.log(a);return a;})
            .then(rcps => {
                let rand = Math.floor(Math.random() * rcps.length);

                return rcps.filter(a => rcps.indexOf(a) === rand);
            })
            .then(rcp => rcp[0].name)
            //.then(a => { console.log(a); return a; })
            ;

    }

    getToppings() {
        return this.getRecipes()
            .then(this._extractToppings.bind(this))
            // si on appelle this dans _extractToppings, il est indispensable de mettre bind
            ;

    }

    _extractToppings(recipe) {
        return uniq(recipe.reduce((acc, val) => [...acc, ...val.toppings], []));

    }






}





