'use strict';

angular.module('typeRiterApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html'
      });
  });
