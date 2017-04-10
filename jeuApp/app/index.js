import { RecipeService } from './recipes';
import { CommandeService } from './commande';

import { PizzaService } from './pizza';

let recipeService = new RecipeService();
let commandeService = new CommandeService();
let pizzaService = new PizzaService();

let toppingUl = document.getElementById('toppings');
let commandesUl = document.getElementById('commandes');


let pizzaH3 = document.querySelector('#pizza h3');
let pizzaH3Top = document.querySelector('#currentToppings #ingredients');
let h = document.createElement.bind(document);


recipeService.getToppings()
    .then(t => t.forEach(addToppings));


recipeService.getRandom()



function addToppings(toppings) {
    let li = h('li');
    li.className = 'toppings list-group-item';
    li.innerHTML = toppings;
    toppingUl.appendChild(li);
}

function addPizza(pizza) {
    let li = h('li');
    li.className = 'commande list-group-item';

    li.style.cursor = 'pointer';
    li.setAttribute('data-pizza', JSON.stringify(pizza.id));
    li.setAttribute('status-pizza', JSON.stringify(pizza.status));
    li.innerHTML = pizza.recipe;
    commandesUl.appendChild(li);
}


commandeService.start(addPizza);


// COMMANDE LISTENER
commandesUl.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === "LI") {
        let id = JSON.parse(event.target.getAttribute('data-pizza'));


        pizzaService.getPizza(id)
            .then(pizzaGet => {

                while (pizzaH3Top.firstChild) {
                    pizzaH3Top.removeChild(pizzaH3Top.firstChild);
                }
                pizzaGet.toppings.forEach((top) => {
                    let li = h('li');
                    li.className = 'top list-group-item';
                    li.innerHTML = top;
                    pizzaH3Top.appendChild(li);


                }

                )
                pizzaH3.innerText = pizzaGet.recipe;
                pizzaH3Top.setAttribute('id-pizza', JSON.stringify(id));



            });
    }
}, false);


// TOPPINGS LISTENER
toppingUl.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === "LI") {

        let idPizz = pizzaH3Top.getAttribute('id-pizza');

        return pizzaService.getPizza(idPizz)
            .then(pizz => {
                if (pizz.status !== "WRONG") {
                    return CheckAndAdd(pizz, event.target.innerText);
                }

            }).then


    }
}, false);


function selectPizza(pizza) {
    if (!pizza) return;
    pizzaH3.innerText = pizza.recipe || 'Sélectionnez une pizza';
}


// Check when add Toppings
function CheckAndAdd(pizza, ingr) {

    return recipeService.getRecipe(pizza.recipe)
        .then(recp => {

            if ((pizza.toppings.length !== 0 && pizza.toppings.indexOf(ingr) !== -1) || recp.toppings.indexOf(ingr) === -1) {
                console.log("WRONG");
                pizza.status = "WRONG";

                pizza.toppings.push(ingr);
                let li = h('li');
                li.className = 'top list-group-item' ;
                li.innerHTML = ingr;
                pizzaH3Top.appendChild(li);
                commandesUl.querySelector('[data-pizza="'+pizza.id+'"]').className += " wrong" ;
                

                return pizza;
            }


            pizza.toppings.push(ingr);
            let li = h('li');
            li.className = 'top list-group-item';
            li.innerHTML = ingr;
            pizzaH3Top.appendChild(li);

            if (pizza.toppings.length === recp.toppings.length) {
                console.log("Compl");
                pizza.status = "COMPLETED";
                commandesUl.querySelector('[data-pizza="'+pizza.id+'"]').remove();

                return pizza;
            } else {
                console.log("INC");
                pizza.status = "INCOMPLETED";
                commandesUl.querySelector('[data-pizza="'+pizza.id+'"]').className += " incompleted" ;
                return pizza;
            }
        }).then(pizza => pizzaService.savePizza(pizza));

    ;
}