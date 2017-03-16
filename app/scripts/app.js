'use strict';

angular.module('confusionApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
  //https://www.coursera.org/learn/angular-js/discussions/weeks/3/threads/piC1uP4CEeagpQ5kjvX3sg?sort=createdAtDesc
        $locationProvider.hashPrefix('');
        $routeProvider
            //Route for contactus
            .when('/contactus', {
                templateUrl : 'contactus.html',
                controller : 'ContactController'
            })
            .when('/menu', {
                templateUrl : 'menu.html',
                controller : 'MenuController'
            })
            .when('/menu/:id', {
                templateUrl : 'dishdetail.html',
                controller : 'DishDetailController'
            })
            .otherwise('/contactus');
    })

;