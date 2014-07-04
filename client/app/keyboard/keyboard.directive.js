'use strict';

// Requires Lodash

angular.module('typeRiterApp')
  .directive('keyboard', function () {
    return {
      templateUrl: 'app/keyboard/keyboard.html',
      restrict: 'A',
      $scope: {
        highlightRed: '@',
        highlightYellow: '@'
      },
      link: function (scope, element, attrs) {

        if (attrs.highlightRed) {
          _.forEach(attrs.highlightRed, function (letter) {
            $('.keyboard li.letter:contains("' + letter + '")').attr('id', 'red');
          });
        }

        if (attrs.highlightYellow) {
          _.forEach(attrs.highlightYellow, function (letter) {
            $('.keyboard li.letter:contains("' + letter + '")').attr('id', 'yellow');
          });
        }

      }
    };
  });
