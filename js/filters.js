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
  }).
  filter('reverse', function() {
    return function(items) {
      if (undefined === items) {
        return;
      }
      return items.slice().reverse();
    };
  }).
  filter('numberPadding', function() {
    return function (number, size) {
      if (undefined === number) {
        return;
      }
      var output = number + "";
      while (output.length < size) {
        output = "0" + output;
      }
      return output;
    };
  });
