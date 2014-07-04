'use strict';

app.factory('Calc', function () {

  var data = {
    errors: [],
    wpm: [],
    accuracy: [],
    ns: []
  };

  return {

    updateCalcs: function (m) {
      m.endTime = performance.now();
      var keyStrokes = m.keyStrokes,
        errors = m.errors,
        totalTime = (m.endTime - m.startTime) / 1000,
        numWords = m.currentSentence.length;

      // Updating...
      m.wpm = this.wordsPerMinute(numWords, totalTime);
      //m.cpm = this.charactersPerMinute(keyStrokes, totalTime);
      m.accuracy = this.characterAccuracy(keyStrokes, errors);
      m.ns = this.netWordsPerMinute(m.accuracy, m.wpm);

      // Make a record
      data.errors.push(m.errors);
      data.wpm.push(m.wpm);
      data.accuracy.push(m.accuracy);
      data.ns.push(m.ns);

      m.totalErrors = this.totalErrors(errors, m);
    },

    wordsPerMinute: function (numWords, totalTime) {
      return Math.round((numWords / totalTime) * 60);
    },

    charactersPerMinute: function (keyStrokes, totalTime) {
      return Math.round((keyStrokes / totalTime) * 60);
    },

    characterAccuracy: function (keyStrokes, errors) {
      return (((keyStrokes / (keyStrokes + errors)) + 0.00001) * 100).toFixed(2);
    },


    netWordsPerMinute: function (accuracy, wpm) {
      return Math.round(accuracy * wpm) / 100;
    },

    totalErrors: function (errors, m) {
      m.oldErrors = errors;
      m.errors = 0;
      return m.totalErrors + m.oldErrors;
    },

    getData: function () {
      return data;
    }


  };
});
