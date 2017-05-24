// 'use strict';
angular.module('kinColor',[])

.directive('colorInput', function() {
    // function newFunction($scope, elem, attrs) {
    //   var currentColor = $scope.colorValue;
    //   if (currentColor) {
    //     $scope.greetMe = currentColor;
    //   } else {
    //     $scope.greetMe = 'no color input yet';
    //   }
    // }
    return {
        template: '<form><label name="color"><h1>Input Color</h1></label><input ng-model="color.value" name="color"></form><div><h1>{{ greetMe }}</h1></div>',
        controller: 'colorCtrl',
        $scope : {
            color: '@'
        },
        // link: newFunction,
        restrict: 'AE'
    };
})

.controller('colorCtrl', ['$scope', function($scope) {

    $scope.color = {
        value : 'green'
    };
    console.log($scope.form.foo);
    $scope.greetMe = 'heres where it should be!';

    var currentColor = $scope.colorValue;
    if (currentColor) {
      $scope.greetMe = currentColor;
    } else {
      $scope.greetMe = 'no color input yet';
    }

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

}]);
