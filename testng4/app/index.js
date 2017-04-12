import angular from 'angular';
import ngRoute from 'angular-route';

import { UsersModule } from './users';
import { AlertModule } from './alert';

angular.module('app', [
    UsersModule,
    AlertModule,
    ngRoute
])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider

            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'Home',
                controllerAs: 'ctrl',
            })

            .when('/users', {
                templateUrl: 'views/users.html',
                controller: 'UsersController',
                controllerAs: 'ctrl'
            })
            .when('/user/:id?', {
                templateUrl: 'views/userEdit.html',
                controller: 'UserEditControler',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: "/"
            })

    })

    .controller('Home', function () {
    })

    ;


;