import angular from 'angular';
import ngRoute from 'angular-route';
import md5 from 'md5';



angular.module('app', [
    ngRoute
])
    .config(function () {



    })
    .controller('DtaGravatarController', function () {
        console.log('instanciation du controller');

        this.mail = 'lehardy.david@live.fr'
      
        this.md5 = function(mail){
            return md5(mail);
        }
        // https://www.gravatar.com/avatar/email-md5


    })

    .directive('dtaGravatar', function () {
        return {
            restrict: 'E',
            template: '<img ng-src=https://www.gravatar.com/avatar/{{ctrl.md5(ctrl.email)}} >',
            //link(scope, element, attrs) { },
            bindToController: {
                email: '='
            },
            scope: {},
            controller: 'DtaGravatarController',
            controllerAs: 'ctrl'
        }
    })


    ;


;