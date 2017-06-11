'use strict';


let forecast = angular.module('forecast', ['ngRoute', 'ngAnimate']);
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
}).factory('ForecastService', function($http){
    return {
        getdata: function(url){
              return $http.get(url); 
        }
    };
});