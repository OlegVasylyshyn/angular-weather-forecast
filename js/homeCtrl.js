'use strict';

forecast.controller('HomeCtrl', function($scope, ForecastService, $window, $location, WEATHER_ID_KEY) {
    
    ForecastService.getJSON('../json/countries.json').then(function(response){
        console.log('Countries', response.data.countries);
        $scope.countries = response.data.countries;
    });
    
    setInterval(function(){
        // console.log('refresh');
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('refresh');
    }, 500);
    
    $scope.loadCities = function(){
        if($scope.selectedCountry)
        loadCities();
    };
    
    let loadCities = function(){
        ForecastService.getJSON('../json/cities/' + $scope.selectedCountry.toLowerCase() + '-cities.json').then(function(response){
            console.log('Cities', response.data);
            $scope.cities = response.data;
            $scope.citiesNames = [];
            for(var cityName in $scope.cities) {
                $scope.citiesNames.push(cityName);
            }
        });
    };
    
    $scope.showTheWeather = function(){
        $window.sessionStorage.setItem(WEATHER_ID_KEY, $scope.selectedCity.toLowerCase());
        $location.path('weather');
    };
    
    $scope.reset = function(){
        $scope.selectedCountry = null;
        $scope.cities = null;
        $scope.citiesNames = null;
        $scope.selectedCity = null;
    };
    
});