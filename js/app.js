'use strict';

angular.module('greenRubyApp', [
  'ngRoute',
  'greenRubyApp.filters',
  'greenRubyApp.controllers',
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:page', { templateUrl: 'partials/page.html', controller: 'PageCtrl' });
  $routeProvider.when('/issue/:issue_id', {templateUrl: 'partials/issue.html', controller: 'IssueCtrl' });
  $routeProvider.when('/', { templateUrl: 'partials/issue.html', controller: 'IssueCtrl' });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
