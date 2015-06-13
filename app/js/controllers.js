'use strict';

/* Controllers */

var bitgrayControllers = angular.module('bitgrayControllers',[]);

bitgrayControllers.controller('AboutUsCtrl',['$scope','$http',
  function($scope,$http){
  
}]);
bitgrayControllers.controller('TermsCtrl',['$scope','$http',
  function($scope,$http){
  
}]);
bitgrayControllers.controller('PrivacyCtrl',['$scope','$http',
  function($scope,$http){
  
}]);
bitgrayControllers.controller('FindStoreCtrl',['$scope','$http',
  function($scope,$http){
    var mapOptions = {
        zoom: 18,
        center: new google.maps.LatLng("4.671752", "-74.057711"),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng("4.671752", "-74.057711"),
    });
    $scope.markers.push(marker);
    
    google.maps.event.trigger($scope.map, 'resize');
  
}]);

bitgrayControllers.controller('StoreCtrl',['$scope','$http','$route','$location','$templateCache' ,
  function($scope,$http,$route,$location,$templateCache){
  $scope.nameTest='Mario Granada';
  $scope.cars="";
  $http({method: 'GET', url:'http://127.0.0.1:8000/app/js/cars.json'}).
    success(function(data, status, headers, config) {
      $scope.cars=data;
      var randomCars=window.knuthShuffle(data);
      $scope.slideCars=randomCars.slice(0,3);

    }).
    error(function(data, status, headers, config) {
    $scope.cars="There was an error retrieving Cars data";
  });



}]);

