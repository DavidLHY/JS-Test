
// RECIPES
let recipies = [
    { 
        name:'regina', 
        toppings: ['Jambon','Fromage','Champignon']
    },
    {
        name:'3fromages',
        toppings: ['Mozzarella','Chevre','Bleu']
    }
];

// PIZZA

let p1 = {
        recipe : 'regina',
        toppings : []
};

// TOOLS



    
function getStatus(pizza,ingr)
{
   
    let recp= recipies.filter((value) => value.name === pizza.recipe)[0];
    console.log(recp);
    if((pizza.toppings.length !==0 && pizza.toppings.indexOf(ingr)===-1) || recp.toppings.indexOf(ingr)===-1)
    {        
        return {pizza:undefined,stat:"WRONG"};
    }


    pizza.toppings.push(ingr);
    if(pizza.toppings.length === recp.toppings.length)
    {
        return {pizza,stat:"COMPLETED"};
    }else
    {
        return {pizza,stat:"INCOMPLETED"};
    }
}