'use strict';


let forecast = angular.module('forecast', ["ngRoute"]);
forecast.config(function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider
    .when("/", {
        templateUrl : "./html/home.tpl.html"
    })
    .when("/next", {
        templateUrl : "./html/home.tpl.html"
    });
});