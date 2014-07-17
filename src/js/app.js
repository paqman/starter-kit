var myApp = angular.module('starterkit', ['ngAnimate', 'ngRoute']).
config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/start.html',
            controller: StartCtrl
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);