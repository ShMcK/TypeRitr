'use strict';

app.factory('Letters', function (Words, Sentences) {

  var keyTimeStart = 0,
    keyTimeEnd = 0,
    alphas = "abcdefghijklmnopqrstuvwxyz".split(""),
    keyRecord = [],
    a = 97;

  for (var i = 0; i < 26; i++)
    keyRecord[String.fromCharCode(a + i)] = [];


  return {
    match: function (m, ev, $scope) {
      if (ev.keyCode === m.currentWord.charCodeAt(m.wordPos)) {
        this.recordKeyTime(ev, m);
        m.wordPos++;
        m.keyStrokes++;
        Words.updateWord(m);
        if (m.wordPos === m.currentWord.length) {
          Sentences.finished(m, $scope); // Final word?
          Words.nextWord(m, $scope); // Next word.
        }
      } else {
        if (ev.keyCode === 32) {
          return;
        } else {
          m.errors++;
          m.keyStokes++;
        }
      }
      keyTimeStart = performance.now();

    },

    recordKeyTime: function (ev, m) {
      if (keyTimeStart !== 0 && (ev.keyCode >= 65)) { // not punctuation
        keyTimeEnd = performance.now();
        var letter = m.currentWord[m.wordPos].toLowerCase();
        var keyTime = keyTimeEnd - keyTimeStart;
        keyRecord[letter].push(keyTime);
        //this.keyTimeAverage(keyRecord[letter]);
      }
    },

    keyTimeAverage: function (letterRec) {
      var sum = _.reduce(letterRec, function (sum, num) {
        return sum + num;
      });
      var average = sum / letterRec.length;
    },

    finalKeyAverages: function () {
      var alphas = "abcdefghijklmnopqrstuvwxyz".split(""),
        finalKeyRecord = [],
        a = 97;
      for (var i = 0; i < 26; i++) {
        finalKeyRecord[String.fromCharCode(a + i)] = []
      }
      _.forEach(keyRecord, function (letter) {
        finalKeyRecord[letter].push(this.keyTimeAverage(KeyRecord[letter]));
        return finalKeyRecord;
      });
    },

    showKeyStats: function () {
      console.log('Show key stats.');
    }
  };
});
