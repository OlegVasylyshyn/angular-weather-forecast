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
        getJSON: function(url){
            return $http.get(url); 
        },
        
        getRequest: function(url, params){
            return $http({
                method: 'GET',
                url: url,
                params: params
            });
        }
    };
})
.constant('WEATHER_ID_KEY', 'city')
.constant('KEY', 'bf60adeff8674d99bef174414172005')
.constant('REQUEST_URL', 'https://api.apixu.com/v1/current.json');