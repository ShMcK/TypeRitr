'use strict';

angular.module('typeRiterApp')
  .directive('keyboard', function () {
    return {
      templateUrl: 'app/keyboard/keyboard.html',
      restrict: 'A',
      link: function (scope, element, attrs) {

      }
    };
  });
