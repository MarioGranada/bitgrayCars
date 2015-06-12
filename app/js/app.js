/* App Module */

var bitgrayApp = angular.module('bitgrayApp',['ngRoute','angular.filter','bitgrayControllers']);


bitgrayApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when("/store",{
      templateUrl:'partials/store.html',
      controller: 'StoreCtrl'
    }).
    when("/about-us",{
      templateUrl:'partials/about_us.html',
      controller: 'AboutUsCtrl'
    }).
    when("/privacy",{
      templateUrl:'partials/privacy.html',
      controller: 'PrivacyCtrl'
    }).
    when("/terms",{
      templateUrl:'partials/terms.html',
      controller: 'TermsCtrl'
    }).
    otherwise({
      redirectTo: "/store"
    });
}]);