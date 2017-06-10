'use strict';


let forecast = angular.module('forecast', ["ngRoute"]);
forecast.config(function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider
    .when("/", {
        templateUrl : "./html/home.tpl.html"
    })
    .when("/weather", {
        templateUrl : "./html/weather.tpl.html"
    })
    .when("/contacts", {
        templateUrl : "./html/contacts.tpl.html"
    });
});