'use strict';

angular.module('typeRiterApp')
  .controller('FinishedCtrl', function ($scope, $rootScope, Letters) {
    $scope.selected = "rstln";
    $scope.keys = {};

    console.log($rootScope.m);
    $scope.keys.finalKeyAverages = Letters.finalKeyAverages($rootScope.m.); // not correct variable
    $scope.keys.finalTotalAverage = Letters.finalTotalAverage($scope.finalKeyAverages);
    $scope.keys.STD = Letters.finalSTD($scope.keys.finalTotalAverage, $scope.keys.finalKeyAverages);

    console.log("averages: " + $scope.keys.finalKeyAverages);
    console.log("average: " + $scope.keys.finalTotalAverage);
    console.log("STD: " + $scope.keys.STD);


  });
