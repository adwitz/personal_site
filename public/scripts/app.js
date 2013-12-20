//angular app
'use strict'

var app = angular.module('app', ['ngRoute',
                                 // 'app.controllers',
                                 // 'app.services',
                                 // 'app.directives'
                                 ]);

app.run(function($rootScope, $location, $templateCache){
  $rootScope.go = function(location){
    $location.path(location);
  };
  $templateCache.put('about.html', '<div>All about Adam</div>');
  $templateCache.put('projects.html', '<div>Here are my projects</div>');
}).config(function ($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'about.html',
    })
    .when('/projects', {
      templateUrl: 'projects.html',
    })
    .otherwise({
      redirectTo: '/'
    });
});
