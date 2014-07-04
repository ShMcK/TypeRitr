'use strict';

app.factory('Words', function () {
  return {

    nextWord: function (m, $scope) {
      if (!m.gameOn) {
        m.pos = -1;
      }
      m.wordPos = 0;
      m.pos++;
      m.currentWord = m.currentSentence[m.pos];
      this.updateWord(m);
      $scope.keyInput = "";
    },

    previousWord: function (m) {
      m.pos--;
      m.currentWord = m.currentSentence[m.pos];
      m.wordPos = m.currentWord.length - 1;
      this.updateWord(m);
    },

    updateWord: function (m) {
      m.currentWordDone = m.currentWord.slice(0, m.wordPos);
      m.currentWordLeft = m.currentWord.slice(m.wordPos + 1);
      m.currentLetter = m.currentWord.slice(m.wordPos, m.wordPos + 1);
      m.sentenceStart = m.currentSentence.slice(0, m.pos);
      m.sentenceEnd = m.currentSentence.slice(m.pos + 1);
    },

  };
});
