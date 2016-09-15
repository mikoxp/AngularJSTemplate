var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'myModule',
  'angularUtils.directives.dirPagination',
  'chart.js'
]);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'web/main.html',
        controller: 'myCtrl'
      }).
      when('/about', {
        templateUrl: 'web/about.html',
        controller: 'aboutCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);
var my= angular.module('myModule', ['ngResource',"checklist-model"]);