'use strict';

angular.module('confusionApp')
    .constant("baseUrl", "http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {
        //https://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
        //PUT method is given to support PUT method in case we need to push some dish to server
        this.getDishes = function() {
            return $resource(baseUrl + "dishes/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };
        /*
        this.getPromotion = function(index) {
            return promotions[index];
        }*/
        this.getPromotion = function() {
            return $resource(baseUrl + "promotions/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };
        // implement a function named getPromotion
        // that returns a selected promotion.
    }])
    .factory('corporateFactory', ['$resource', 'baseUrl', function($resource, baseUrl){

        var corpfac = {};
        // Remember this is a factory not a service
        corpfac.getLeaders = function() {
            return $resource(baseUrl + "leadership/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };
        return corpfac;
    }])
    .factory('feedbackFactory', ['$resource', 'baseUrl', function($resource, baseUrl){
        var feedbackFac = {};
        // Remember this is a factory not a service
        feedbackFac.getFeedback = function(){
            return $resource(baseUrl + "feedback/:id", null, {
                'save': {
                    method: 'POST'
                }
            });
        };
        return feedbackFac;
    }])
;