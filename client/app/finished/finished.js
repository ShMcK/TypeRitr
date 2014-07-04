'use strict';

angular.module('typeRiterApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/stats', {
        templateUrl: 'app/finished/finished.html',
        controller: 'FinishedCtrl'
      });
  });
