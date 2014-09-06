'use strict';

angular.module('greenRubyApp.filters', []).
  filter('categoryFilter', function() {
    return function(items,category) {
      if (undefined === items) {
        return;
      }
      var filtered = [];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (category === item.category) {
          filtered.push(item);
        }
      }
      return filtered;
    };
  }).
  filter('issueFilter', function() {
    return function(items,issue) {
      if (undefined === items) {
        return;
      }
      var filtered = [];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (parseInt(issue) === parseInt(item.issue)) {
          filtered.push(item);
        }
      }
      return filtered;
    };
  });
