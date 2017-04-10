import { RecipeService } from './recipes';
import { PizzaService } from './pizza';

let recipeService = new RecipeService();
let pizzaService = new PizzaService();

export class CommandeService{

constructor(){
    this.pizzaCounter = 0;
}



start(cb) {
      pizzaService.deletePizzas()
      .then(()=> this.open(cb));

}


 open(cb) {
        setInterval(() => {
            recipeService.getRandom()
            //.then(a => { console.log(a); return a; })
            .then(recipe => ({ recipe: recipe, toppings: [],status:"INCOMPLETED" }))
            .then(pizza => pizzaService.addPizza(pizza))
            .then(pizza => {
                this.pizzaCounter++;
                if(this.pizzaCounter>9)
                {
                    clearInterval(this.interval);
                }
                return pizza;
            } )
            .then(cb)
           // .then(coucou)
        }, 3000);
    }


}