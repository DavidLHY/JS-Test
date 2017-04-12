import angular from 'angular';
import { RecipesService } from './services/recipes.service';
import { RecipesControler } from './controllers/recipes.controller';


export const RecipesModule = angular.module('recipes.module', [])

    .value('API_URL', 'http://localhost:3000/recipes')
    .service('RecipesService', RecipesService)
    .controller('RecipesControler', RecipesControler)
    .controller('DirectiveCtrl', class DirectiveCtrl {
        constructor() { }
        editPizza(pizza) {

            this.onSelect({
                $event: pizza
            })
        }

        addToppings(top){
            this.onSelect({
                $event: top
            })

        }


    })
    .directive("dtaPizza", function () {

        return {

            restrict: 'E',
            template: `           
                <h1>Commandes</h1>
                <div class "panel">
                     <ul class='list-group'>
                        <li ng-click="ctrl.editPizza(pizz)" class='list-group-item' ng-class="pizz.status" ng-repeat="pizz in ctrl.pizzas"> {{pizz.recipe}}</li>
                     </ul>
                </div>
            `,
            bindToController: {
                pizzas: '=',
                onSelect: '&'
            },
            scope: {},
            controller: 'DirectiveCtrl',
            controllerAs: 'ctrl'

        }


    })
    .directive("dtaToppings", function () {

        return {
            transclude: true,
            restrict: 'E',
            template: `
              
                <h1 ng-transclude></h1>

                <div class "panel panel-default">
                    <div class="panel-body">
                        <ul class='list-group' >
                            <li ng-click="ctrl.addToppings(top)" class='list-group-item' ng-repeat="top in ctrl.toppings"> {{top}}</li>
                        </ul>
                    </div>
                </div>

  
            `,
            bindToController: {
                toppings: '=',
                onSelect: '&'
            },
            scope: {},
            controller: 'DirectiveCtrl',
            controllerAs: 'ctrl'


        }


    })
    .name;