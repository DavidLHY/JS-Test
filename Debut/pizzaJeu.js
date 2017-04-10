// TOPPINGS
let toppings = ['Jambon', 'Fromage', 'Champignon', 'Mozzarella', 'Chevre', 'Bleu'];


// RECIPES

let recipies = [
    {
        name: 'Regina',
        toppings: ['Jambon', 'Fromage', 'Champignon']
    },
    {
        name: '3 Fromages',
        toppings: ['Mozzarella', 'Chevre', 'Bleu']
    }
];

// PIZZA

let p1 = {
    recipe: 'Regina',
    toppings: []
};

// TOOLS

function CheckAndAdd(pizza, ingr) {

    let recp = recipies.filter((value) => value.name === pizza.recipe)[0];

    if ((pizza.toppings.length !== 0 && pizza.toppings.indexOf(ingr) !== -1) || recp.toppings.indexOf(ingr) === -1) {
        console.log(pizza.toppings.indexOf(ingr));
        console.log(recp.toppings.indexOf(ingr));
        return { pizza: undefined, stat: "WRONG" };
    }


    pizza.toppings.push(ingr);
    if (pizza.toppings.length === recp.toppings.length) {
        return { pizza, stat: "COMPLETED" };
    } else {
        return { pizza, stat: "INCOMPLETED" };
    }
}


function addRecepies(recepies) {
    let li = document.createElement('li');

    li.className = 'recp';
    let ul = "";

    let ulTab = recepies.toppings.reduce(function (acc, val) {

        acc += " <li> " + val + "</li>";
        return acc;
    }, ul);

    li.innerHTML = recepies.name + "<ul>" + ulTab + "</ul>";
    document.getElementsByClassName('recettes')[0].appendChild(li);


}


//recipies.map((val) => addRecepies(val));


let b1 = document.getElementById('Ajout');
b1.addEventListener('click', () => {
    let val = document.getElementById('nomRec').value;

    addRecepies({ name: val, toppings: [] });

}, false); // useCapture



let recipesPromise= fetch('http://10.1.0.136:3000/recipes')
    .then(response => response.json())
    .then(r=> r.forEach(addRecepies))   
    ;


function doItLater(){
    console.log('youpi!');
}

setTimeout(doItLater,1000);

promiseTimeout(1000).then(doItLater);

function promiseTimeout(time);
{
  return  new Promise(r =>   setTimeout(r,time));
}