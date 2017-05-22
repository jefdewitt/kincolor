'use strict';
console.log('22222222')
angular.module('kinColor', [])

var kinColor = angular.module('kinColor')

kinColor.directive('colorInput', function() {
    console.log('22222222')
    return {
        template: 'Input Color',
        // controller: 'colorCtrl',
        // replace: true,
        restrict: 'AE'
    };
})

kinColor.controller('colorCtrl', function($scope) {
    $scope.greetMe = "Yay, it's working!";
});
