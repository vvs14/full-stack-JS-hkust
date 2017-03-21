'use strict';

angular.module('confusionApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            //route for homepage
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        template: '<h1>To be completed</h1>',
                        controller: 'IndexController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })
            //Aboutus page
            .state('app.aboutus', {
                url: 'aboutus',
                views: {
                    'content@': {
                        template: '<h1>To be Completed</h1>'
                    }
                }
            })
            //For contactus
            .state('app.contactus', {
                url: 'contactus',
                views: {
                    'content@': {
                        templateUrl: 'views/contactus.html',
                        controller: 'ContactController'
                    }
                }
            })
            //For menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@':{
                        templateUrl: 'views/menu.html',
                        controller: 'MenuController'
                    }
                }
            })
            //For dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/dishdetail.html',
                        controller: 'DishDetailController'
                    }   
                }
            });
        $urlRouterProvider.otherwise('/');
    })
;