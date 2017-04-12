import angular from 'angular';
import ngRoute from 'angular-route';

import { RecipesModule } from './recipes';


angular.module('app', [
    RecipesModule,
    ngRoute
])
    .config(function ($locationProvider,$routeProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider

            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'Home',
                controllerAs: 'ctrl',
            })

            .when('/game', {
                templateUrl: 'views/game.html',
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