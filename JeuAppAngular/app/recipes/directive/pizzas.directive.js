export const PizzaComponent = {


    template: `           
                <h1>Commandes</h1>
                <div class "panel">
                     <ul class='list-group'>
                        <li ng-click="$ctrl.editPizza(pizz)" class='list-group-item' ng-class="pizz.status" ng-repeat="pizz in $ctrl.pizzas"> {{pizz.recipe}}</li>
                     </ul>
                </div>
            `,
    bindings: {
        pizzas: '=',
        onSelect: '&'
    },
    controller: 'DirectiveCtrl'




};