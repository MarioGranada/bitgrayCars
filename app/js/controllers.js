'use strict';

/* Controllers */

var bitgrayControllers = angular.module('bitgrayControllers',[]);

bitgrayControllers.controller('UserLoginCtrl',['$scope','$http',
  function($scope,$http){
  $scope.name='Mario Granada';
}]);

bitgrayControllers.controller('UserProfileCtrl',['$scope','$http','$route','$location' ,
  function($scope,$http,$route,$location){
  $scope.userNameTest='Mario Granada';
  $scope.userList="";
  $scope.photos="";
  // $scope.arrayTest={};
  $http({method: 'GET', url:'http://jsonplaceholder.typicode.com/users'}).
    success(function(data, status, headers, config) {
    $scope.userList=data;
    $scope.randomUser=$scope.userList[Math.floor(Math.random() * $scope.userList.length)];
    $scope.existGeoItems=false;

    // if($scope.arrayTest && !jQuery.isEmptyObject($scope.arrayTest)){console.log(true)} else{console.log(false)};
    if($scope.randomUser.address.geo && !jQuery.isEmptyObject($scope.randomUser.address.geo)){
      $scope.existGeoItems=true;
      var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng($scope.randomUser.address.geo.lat, $scope.randomUser.address.geo.lng),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng($scope.randomUser.address.geo.lat, $scope.randomUser.address.geo.lng),
        title: $scope.randomUser.name
    });
    $scope.markers.push(marker);
    };
    google.maps.event.trigger($scope.map, 'resize');
  }).
    error(function(data, status, headers, config) {
    $scope.userList="Ther was an error retrieving users data";
  });
  // $http({method: 'GET', url:'http://jsonplaceholder.typicode.com/photos'}).
  //   success(function(data, status, headers, config) {
  //   $scope.photos=data;
  // }).
  //   error(function(data, status, headers, config) {
  //   $scope.photos="Ther was an error retrieving photos data";
  // });
  $scope.reloadRoute = function() {
   
   // $route.reload();
   // Using $route.reload(); causes an error with the google maps plugin which displays up only one section (top left)
   // of the map, one solution is to use location.reload();
   location.reload();
   // $location.reload()
  }

}]);

bitgrayControllers.controller('UserLoginFormCtrl',['$scope', '$location' ,
  function($scope,$location){
  // $scope.username='Mario Granada';
  // $scope.userpassword="";
  $scope.validateLoginForm=function(){
    $location.path("/user_profile")
  }
}]);


