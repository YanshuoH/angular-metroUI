'use strict';

/**
 * @ngdoc function
 * @name angularMetroUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMetroUiApp
 */
angular.module('angularMetroUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
