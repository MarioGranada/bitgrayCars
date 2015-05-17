/* App Module */

var bitgrayApp = angular.module('bitgrayApp',['ngRoute','angular.filter','ngMap','bitgrayControllers','bitgrayFilters']);


bitgrayApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when("/user_login",{
      templateUrl:'partials/user_login.html',
      controller: 'UserLoginCtrl'
    }).
    when("/user_profile",{
      templateUrl:'partials/user_profile.html',
      controller: 'UserProfileCtrl'
    }).
    otherwise({
      redirectTo: "/user_login"
    });
}]);

bitgrayApp.directive("imageGallery",function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/image-gallery.html'
    };
  });