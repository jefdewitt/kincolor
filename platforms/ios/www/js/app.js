'use strict';
angular.module('kinColor', [])

.directive('colorInput', function() {
    console.log('22222222')
    return {
        template: '<form><label name="color"><h1>Input Color</h1></label><input ng-model="colorValue" name="color"></form>',
        controller: 'colorCtrl',
        replace: true,
        restrict: 'AE'
    };
})

.controller('colorCtrl', function($scope) {
    $scope.greetMe = "Yay, it's working!";
    var currentColor = $scope.colorValue;
});
