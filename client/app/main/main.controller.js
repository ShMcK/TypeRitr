'use strict';

app.controller('MainCtrl', function ($scope, $location, Sentences, Words, Letters) {

  // Model
  var m = {
    gameOn: false,
    pos: 0,
    wordPos: 0,
    startTime: 0,
    endTime: 0,
    errors: 0,
    keyStrokes: 0,
    accuracy: 100,
    totalErrors: 0,
    gameOver: false
  };

  // Variables in scope
  $scope.m = m;
  $scope.data = [];

  // Track actions with ng-Keydown
  this.onKeyPress = function ($event) {
    // Game Start Config
    if (!m.gameOn) {
      Sentences.start(m);
    }
    // Letters match?
    Letters.match(m, $event, $scope);
    if (m.gameOver) {
      $location.path('/stats');
      //Letters.showKeyStats();
    }
  };


  // On Page Load
  Sentences.nextSentence(m);
  Words.nextWord(m, $scope);

});
