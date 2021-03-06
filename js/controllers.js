'use strict';

var greenRubyApp = angular.module('greenRubyApp.controllers', []);

greenRubyApp.controller('IssueCtrl', ['$filter', '$scope', '$http', '$routeParams', '$sce', function($filter, $scope, $http, $routeParams, $sce) {
  $scope.params = $routeParams;
  $http.get('data/issues.json').success(function(data) {
    $scope.issues = data;
    $scope.current_issue_id = $scope.issues[$scope.issues.length-1]["id"];

    if (undefined !== $routeParams.issue_id) {
      $scope.current_issue_id = parseInt($routeParams.issue_id);
    }
    $scope.current_issue = $filter('filter')($scope.issues, function(d) { return d.id === $scope.current_issue_id; } )[0];
    $scope.edito = $sce.trustAsHtml($scope.current_issue.edito);

    $scope.stories_filters = {"issue":$scope.current_issue_id};
    $scope.issues_filters = {"id":$scope.current_issue_id};
    });
  $http.get('data/categories.json').success(function(data) {
    $scope.categories = data;
    });
  $http.get('data/stories.json').success(function(data) {
    $scope.stories = data;
    $scope.trusted_html = function(html_code) {
      return $sce.trustAsHtml(html_code);
    };
  });
}]);

