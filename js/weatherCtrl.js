'use strict';

forecast.controller('WeatherCtrl', function($scope, ForecastService, WEATHER_ID_KEY, KEY, REQUEST_URL) {
    
    let weather;
    let city = window.sessionStorage.getItem(WEATHER_ID_KEY);
    let requestParam = {};
    requestParam.q = city;
    requestParam.key = KEY;
    
    ForecastService.getRequest(REQUEST_URL, requestParam).then(function(response){
        console.log('Response from server', response);
        setWeather(response.data);
    }, function(error){
        console.error('Something went wrong', error);
    });  
    
    let setWeather = function(weather){
        $scope.temp = weather.current.temp_c + ' °C';
        $scope.pressure = weather.current.pressure_mb;
        $scope.humidity = weather.current.humidity + ' %';
        $scope.wind = 'speed: ' + weather.current.wind_kph + ', deg: ' + weather.current.wind_degree + '°';
        $scope.clouds = weather.current.cloud > 0 ? weather.current.cloud : 'none';
        $scope.general = weather.current.condition.text;
        
        let city = weather.location.name;
        let generalWeather = weather.current.condition.text;
        $scope.mainHeader = 'The weather is ' + generalWeather.toLowerCase() + ' in ' + city;    
    };
    
    
});