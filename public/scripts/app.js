//angular app
'use strict'

var app = angular.module('app', ['ngRoute',
                                 // 'app.controllers',
                                 // 'app.services',
                                 // 'app.directives'
                                 ]);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'about.html',
    })
    .when('/projects', {
      templateUrl: 'projects.html',
    })
    .when('/tech', {
      templateUrl: 'tech.html',
    })
    .when('/where', {
      templateUrl: 'where.html',
    })
    .otherwise({
      redirectTo: '/'
    });
}).run(function($rootScope, $location, $templateCache){
  $rootScope.go = function(location){
    if ($location.path() === location){
      $location.path('/');
    } else {
      $location.path(location);
    }
  };
  $templateCache.put("about.html", "<article class='descriptions'>" +
                                      "<p>" +
                                      "To strive, to seek, to find and to meld tech with nature, art and travel." +
                                      "</p>" +
                                      "<p>" +
                                      "I cover the full-stack and deftly build client-side apps." +
                                      "</p>" +
                                    "</article>");
  $templateCache.put("projects.html", "<article class='descriptions'>" +
                                        "<p><a class='projects' href='https://github.com/caracolrec/caracol'>Caracol</a> is an open source recommendation engine for long-form articles.</p>" +
                                        "<p>I also built the front end of a mobile web app for a Bay Area seed-distribution company using AngularJS, Stylus and the Google Maps API.</p>" +
                                      "</article>");
  $templateCache.put("tech.html", "<article class='descriptions'>" +
                                    "<p class='tech'>A selection of the tools I use:</p>" +
                                    "<div class='logos javascript'></div>" +
                                    "<div class='logos node'></div>" +
                                    "<div class='logos angular'></div>" +
                                    "<div class='logos backbone'></div>" +
                                    "<div class='logos postgres'></div>" +
                                    "<div class='logos stylus'></div>" +
                                    // "<div class='logos mocha'></div>" +
                                    "</article>");
  $templateCache.put("where.html", "<article class='descriptions'>" +
                                     "<p>Coming soon: a mapped web of my travels.</p>" +
                                    "</article>");
});