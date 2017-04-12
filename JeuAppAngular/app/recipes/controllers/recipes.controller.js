export class RecipesControler {

    constructor(RecipesService) {
        this.RecipesService = RecipesService;
        this.RecipesService.getToppings()
            .then(tops => this.toppings = tops)

        /*  this.RecipesService.getRandom()
              .then(recp => this.pizzas = [{
                  recipe: recp, toppings: [], status: "INCOMPLETED"
              }])*/
        this.pizza = {}
        this.pizzas = [];
        this.start();
        this.score = 0;
        this.ingame = true;

    }

    start() {

        let getRandomPizza = () => {
            this.RecipesService
                .getRandom()
                .then(recipe => ({ recipe: recipe, toppings: [], status: "incomplete" }))

                .then(pizza => this.pizzas.push(pizza))
                .then(() => {
                    if (this.pizzas.length > 10) {
                        clearInterval(this.interval);
                        console.log('PERDU'); // @TODO plus joli
                        this.ingame = false;
                    }
                })
        }

        this.interval = setInterval(getRandomPizza, 3000);
    }

    editPizza(pizz) {
        if(this.ingame)
        {
        this.pizza = pizz;
        }
    }

    addToppings(top) {
        if (this.ingame && this.pizza.status === "incomplete") {
            this.pizza.toppings.push(top);


            this.RecipesService.getRecipe(this.pizza.recipe)
                .then(rcp => {

                    let nbingrRcp = rcp.toppings.filter(t => t === top).length;
                    let nbingrPizza = this.pizza.toppings.filter(t => t === top).length;

                    if (nbingrRcp !== 0 && nbingrRcp >= nbingrPizza) {
                        // complete or incomplete
                        if (this.pizza.toppings.length === rcp.toppings.length) {
                            this.pizza.status = "complete";

                            this.pizzas = this.pizzas.filter(a => a.status !== "complete");
                            this.pizza = {};
                            this.score++;
                        }//else still incomplete


                    } else {
                        this.pizza.status = "wrong";

                    }




                })


        }
    }

};