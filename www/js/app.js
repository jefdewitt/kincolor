// 'use strict';
angular.module('kinColor',[])

.directive('colorInput', function() {
    return {
        template: '<form><label name="color"><h1>Input Color</h1></label><input ng-model="color.value" ng-change="updateFoo(color.value)" name="color"></form><div><h1  >{{ greetMe }}</h1></div>',
        controller: 'colorCtrl',
        restrict: 'AE'
    };
})

.controller('colorCtrl', function($scope) {

    $scope.greetMe = 'The input field is empty!';

    $scope.updateFoo = function (newFoo) {
      console.log(newFoo);

        $scope.greetMe = newFoo;
    }

    // var currentColor = $scope.color.value;
    // if (currentColor) {
    //   $scope.greetMe = currentColor;
    // } else {
    //   $scope.greetMe = 'no color input yet';
    // }

    // var convert = sharedObject;
    // console.info(convert);
    // convert.hex.lab('DEADBF');

    // var returnValue = $http.get() {
    //   .then(function (response) {
    //
    //     $log.info(response);
    //   })
    // }

    // function componentToHex(c) {
    //   var hex = c.toString(16);
    //   return hex.length == 1 ? "0" + hex : hex;
    // }
    //
    // function rgbToHex(r, g, b) {
    //     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // }
    //
    // function hexToRgb(hex) {
    //   // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    //   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    //   hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    //       return r + r + g + g + b + b;
    //   });
    //
    //   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    //   return result ? {
    //       r: parseInt(result[1], 16),
    //       g: parseInt(result[2], 16),
    //       b: parseInt(result[3], 16)
    //   } : null;
    // }
    //
    // var rgbColor = hexToRgb(currentColor);
    // $scope.greetMe = currentColor;

});
