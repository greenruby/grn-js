'use strict';

angular.module('greenRubyApp', [
  'ngRoute',
  'greenRubyApp.filters',
  'greenRubyApp.controllers',
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:issue_id', {templateUrl: 'partials/issue.html', controller: 'IssueCtrl'});
  $routeProvider.when('/', {templateUrl: 'partials/issue.html', controller: 'IssueCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

function MainCtrl($scope, $location, $route) {
  $scope.activePath = null;
  $scope.$on('$routeChangeSuccess', function(){
    $scope.activePath = $location.path();
    console.log( $location.path() );
  });
}
