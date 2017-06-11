'use strict';

forecast.controller('HomeCtrl', function($scope, ForecastService, $window, $location) {
    
    ForecastService.getdata('../json/countries.json').then(function(response){
        console.log('Counties', response.data.countries);
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
         return ForecastService.getdata('../json/cities/' + $scope.selectedCountry.toLowerCase() + '-cities.json').then(function(response){
            console.log('Cities', response.data);
            $scope.cities = response.data;
            $scope.citiesNames = [];
            for(var cityName in $scope.cities) {
                $scope.citiesNames.push(cityName);
            }
        });
    };
    
    $scope.showTheWeather = function(){
        $window.sessionStorage.setItem('city', $scope.selectedCity.toLowerCase());
        $location.path('weather');
    };
    
});