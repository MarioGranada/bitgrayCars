'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);
var bitgrayControllers = angular.module('bitgrayControllers',[]);

bitgrayControllers.controller('UserLoginCtrl',['$scope','$http',
  function($scope,$http){
  $scope.name='Mario Granada';
}]);

bitgrayControllers.controller('UserProfileCtrl',['$scope','$http',
  function($scope,$http){
  $scope.name='Mario Granada';
}]);

// phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//   function($scope, Phone) {
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
//   }]);

// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//   function($scope, $routeParams, Phone) {
//     $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//       $scope.mainImageUrl = phone.images[0];
//     });

//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     }
//   }]);
