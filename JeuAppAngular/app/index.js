import angular from 'angular';
import ngRoute from 'angular-route';

import { RecipesModule } from './users';


angular.module('app', [
    RecipesModule,
])
    .config(function ($locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider

            .when('/', {
                template: 'views/home.html',
                controller: 'Home',
                controllerAs: 'ctrl',
            })

            .when('/game', {
                template: 'views/game.html',
                controller: 'RecipesControler',
                controllerAs: 'ctrl',
            })
            
            .otherwise({
                redirectTo: "/"
            })

    })

    .controller('Home', function () {
    })

    ;


;