'use strict';

/**
 * @ngdoc overview
 * @name angularMetroUiApp
 * @description
 * # angularMetroUiApp
 *
 * Main module of the application.
 */
angular
  .module('angularMetroUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });

var app = angular.module('angularMetroUiApp');

app.directive('ngDropdown', function() {
  return {
    link: function(element, attrs) {
      
    }
  };
})
