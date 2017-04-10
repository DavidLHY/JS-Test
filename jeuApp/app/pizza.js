const API_URL = 'http://localhost:3000/pizzas'

let headers = new Headers();
headers.set('Content-Type', 'application/json');

export class PizzaService {


    addPizza(pizza) {
        return fetch(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(pizza)
        }).then(resp => resp.json())
            ;

    }

    savePizza(pizza) {

        return fetch(API_URL + "/" + pizza.id, {
            method: 'PUT',
            headers,
            body: JSON.stringify(pizza)
        }).then(resp => resp.json())
            ;

    }

    getPizzas() {

        return fetch(API_URL).then(resp => resp.json())
            ;

    }

    getPizza(id) {

        return fetch(API_URL + "/" + id).then(resp => resp.json())
            ;


    }

    deletePizzas() {

        return this.getPizzas().then(pzs => Promise.all(pzs.map(({id}) => this.deletePizza(id)))) ;

        
    }

    deletePizza(id) {

        return fetch(API_URL + "/" + id, {
            method: 'DELETE',
        }).then(resp => resp.json())
            ;


    }

}


