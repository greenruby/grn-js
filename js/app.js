'use strict';

angular.module('greenRubyApp', [
  'ngRoute',
  'greenRubyApp.controllers',
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:issue_id', {templateUrl: 'partials/issue.html', controller: 'IssueCtrl'});
  $routeProvider.when('/', {templateUrl: 'partials/issue.html', controller: 'IssueCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
