//angular app
'use strict'

var app = angular.module('app', ['ngRoute',
                                 // 'app.controllers',
                                 // 'app.services',
                                 // 'app.directives'
                                 ]);

app.run(function($rootScope, $location){
  $rootScope.go = function(location){
    $location.path(location);
  };
}).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../../index.html',
    })
    .when('/about', {
      templateUrl: '../partials/about.html',
    })
    .when('/projects', {
      templateUrl: '../partials/projects.html',
    })
    .otherwise({
      redirectTo: '/'
    });
});
