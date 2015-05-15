/* App Module */

var bitgrayApp = angular.module('bitgrayApp',['ngRoute','bitgrayControllers']);

// var phonecatApp = angular.module('phonecatApp', [
//   'ngRoute',
//   'phonecatAnimations',
//   'phonecatControllers',
//   'phonecatFilters',
//   'phonecatServices'
// ]);

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

// phonecatApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/phones', {
//         templateUrl: 'partials/phone-list.html',
//         controller: 'PhoneListCtrl'
//       }).
//       when('/phones/:phoneId', {
//         templateUrl: 'partials/phone-detail.html',
//         controller: 'PhoneDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/phones'
//       });
//   }]);
