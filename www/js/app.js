// 'use strict';
angular.module('kinColor',[])

.directive('colorInput', function() {
    return {
        template: '<form><label name="color"><h1>KinColor</h1></label><input ng-model="color.value" name="color" placeholder="Enter Color"><div><label name="type">rgb</label><input type="checkbox" ng-click="test()" ng-model="check"><input type="button" value="go" ng-click="updateFoo(color.value)"></div></form><div><h2>{{ newColor }}</h2></div>',
        controller: 'colorCtrl',
        restrict: 'AE'
    };
})

.controller('colorCtrl', function($scope) {

    $scope.newColor = '';

    $scope.updateFoo = function (nextColor) {

        if ($scope.check === true && nextColor.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) {
            var hexColor = rgb2Hex(nextColor);
            $scope.newColor = hexColor;
        } else if ($scope.check === true) {
            $scope.newColor = 'E.g., rgb(xxx,xxx,xxx)';
        }

        if ($scope.check != true && nextColor.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) {
            var rgbColor = convertHex(nextColor);
            $scope.newColor = rgbColor;
        } else if ($scope.check != true) {
            $scope.newColor = 'E.g., #xxxxxx';
        }
    }

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
