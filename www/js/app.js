// 'use strict';
angular.module('kinColor',[])

.directive('colorInput', function() {
    return {
        template: '<form><label name="color"><h1>Input Color</h1></label><input ng-model="color.value" ng-change="updateFoo(color.value)" name="color"><label name="type">rgb<input type="checkbox" ng-click="test()" ng-model="type.value"><label></form><div><h1>{{ newColor }}</h1></div>',
        controller: 'colorCtrl',
        restrict: 'AE'
    };
})

.controller('colorCtrl', function($scope) {

    $scope.newColor = 'The input field is empty!';

    $scope.updateFoo = function (newFoo) {

        if ($scope.type.value) {
            var hexColor = rgb2Hex(newFoo);
            $scope.newColor = hexColor;
        } else {
            var rgbColor = convertHex(newFoo);
            $scope.newColor = rgbColor;
        }
    }

    // $scope.test = function() {
    //     console.log($scope.type.value);
    // }

    function rgb2Hex(rgb){
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }

    function convertHex(hex){
        hex = hex.replace('#','');
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);
        result = 'rgb('+r+','+g+','+b+')';
        return result;
    }


});
