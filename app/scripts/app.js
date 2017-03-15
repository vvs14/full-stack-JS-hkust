'use strict';

angular.module('confusionApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            //Route for contactus
            .when('/contactus', {
                templateUrl: 'contactus.html',
                controller: 'ContactController'
            })
            .when('/menu', {
                templateUrl: 'menu.html',
                controller: 'MenuController'
            })
            .when('/menu/:id', {
                templateUrl: 'dishdetail.html',
                controller: 'DishDetailController'
            })
            .otherwise('/contactus')
    })

;