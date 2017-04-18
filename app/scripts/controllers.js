'use strict';

angular.module('confusionApp')

    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;
        $scope.showMenu = false;
        $scope.message = "Loading...";
        $scope.dishes = menuFactory.getDishes().query(
            function(response) {
                $scope.dishes = response; //with $http, it would have been response.data
                $scope.showMenu = true;
            },
            function(response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
        $scope.select = function(setTab) {
            $scope.tab = setTab;
            if (setTab === 2) {
                $scope.filtText = "appetizer";
            } else if (setTab === 3) {
                $scope.filtText = "mains";
            } else if (setTab === 4) {
                $scope.filtText = "dessert";
            } else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function(checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };
    }])

    .controller('ContactController', ['$scope', function($scope) {

        $scope.feedback = {
            mychannel: "",
            firstName: "",
            lastName: "",
            agree: false,
            email: ""
        };

        var channels = [{
            value: "tel",
            label: "Tel."
        }, {
            value: "Email",
            label: "Email"
        }];

        $scope.channels = channels;
        $scope.invalidChannelSelection = false;

    }])

    .controller('FeedbackController', ['$scope', function($scope) {

        $scope.sendFeedback = function() {

            console.log($scope.feedback);

            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            } else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {
                    mychannel: "",
                    firstName: "",
                    lastName: "",
                    agree: false,
                    email: ""
                };
                $scope.feedback.mychannel = "";
                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])

    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
        $scope.showDish = false;
        $scope.message = "Loading...";
        $scope.dish = menuFactory.getDishes().get({
            id: parseInt($stateParams.id, 10)
        }).$promise.then(
            function(response) {
                $scope.dish = response;
                $scope.showDish = true;
            },
            function(response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
    }])

    .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {
        $scope.dishComment = {
            rating: 5,
            comment: "",
            author: "",
            date: ""
        };
        //Setting radio button checked with AngularJS. 
        //http://stackoverflow.com/questions/5592345/how-to-select-a-radio-button-by-default/33896622#33896622
        $scope.dishComment.rating="5";
        $scope.submitComment = function() {
            $scope.dishComment.date = new Date().toISOString();
            console.log($scope.dishComment);
            //$scope.dish is defined in DishDetailController. Ad DishCommentController is nested inside DishDetailController, it will access to $scope.dish.
            $scope.dish.comments.push ($scope.dishComment);
            menuFactory.getDishes().update ({id:$scope.dish.id},$scope.dish);
            $scope.commentForm.$setPristine();
            $scope.dishComment = {
                rating: 5,
                comment: "",
                author: "",
                date: ""
            };
        }
    }])

    // implement the IndexController and About Controller here
    .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {
        $scope.showDish = false;
        $scope.message = "Loading...";
        $scope.creation = menuFactory.getDishes().get({
            id: 0
        }).$promise.then(
            function(response) {
                $scope.creation = response;
                $scope.showDish = true;
            },
            function(response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
        var monthsPromotion = menuFactory.getPromotion(0);
        $scope.monthsPromotion = monthsPromotion;
        var specialist = corporateFactory.getLeader(3);
        $scope.specialist = specialist;
    }])

    .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {
        //To make it accessible in aboutus.html
        $scope.leaders = corporateFactory.getLeaders();
    }])

;