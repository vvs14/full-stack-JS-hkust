'use strict';

angular.module('confusionApp')

    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;
        $scope.showMenu = true;
        $scope.message = "Loading...";
        $scope.dishes = menuFactory.getDishes().query();
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
        $scope.showDish = true;
        $scope.message = "Loading...";
        $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id, 10)});
            }])

    .controller('DishCommentController', ['$scope', function($scope) {

        $scope.dishComment = {
            rating: 5,
            comment: "",
            author: "",
            date: ""
        };

        $scope.submitComment = function() {

            $scope.dishComment.date = new Date().toISOString();
            console.log($scope.dishComment);

            $scope.dish.comments.push($scope.dishComment);

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
        $scope.showDish = true;
        $scope.message = "Loading...";
        $scope.creation = menuFactory.getDishes().get({id:0});
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