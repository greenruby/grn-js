var greenRubyApp = angular.module('greenRubyApp', []);

greenRubyApp.controller('IssueCtrl', ['$filter', '$scope', '$http', function ($filter, $scope, $http) {
  $http.get('data/issues.json').success(function(data) {
    $scope.issues = data;
    $scope.current_issue_id = $scope.issues[0]["id"];
    $scope.current_issue = $filter('filter')($scope.issues, function(d) { return d.id === $scope.current_issue_id} )[0];
    $scope.stories_filters = {"issue":$scope.current_issue_id};
    $scope.issues_filters = {"id":$scope.current_issue_id};
    });
  $http.get('data/stories.json').success(function(data) {
    $scope.stories = data;
    });
}])
