'use strict';

app.factory('Sentences', function (Calc) {
  var count = -1;

  return {
    sentenceToWordArray: function (sentence) {
      return sentence.split(" ");
    },

    getSentence: function () {
      console.log(count);
      count++;
      var sentences = [
        "The quick brown fox jumps over the lazy dog.",
        "Jinxed wizards pluck ivy from the big quilt.",
        "Big Fuji waves pitch enzymed kex liquor.",
        "Pack my box with five dozen liquor jugs.",
        "Jackdaws love my big sphinx quartz.",
        "The five boxing wizards jump quickly.",
        "How quickly daft jumping zebras vex.",
        "Quick zephyrs blow, vexing daft Jim.",
        "Sphinx of black quartz, judge my vow.",
        "Waltz, nymph, for quick jigs vex Bud.",
        "Blowzy night-frumps vex'd Jack Q.",
        "Glum Schwartzkopf vex'd by NJ IQ.",
        "Waltz job vexed quick frog nymphs.",
        "Junk MTV quiz graced by whelps.",
        "Bright vixens jump; dozy fowl quack.",
        "Sex-charged fop blew my junk TV quiz.",
        "Both fickle dwarves jinx my pig quiz.",
        "Fat hag dwarves quickly zap jinx mob.",
        "Go, lazy fat vixen; be shrewd, jump quick.",
        "My jocks box, get hard, unzip, quiver, flow.",
        "My ex pub quiz crowd gave joyful thanks.",
        "Cozy sphinx waves quart jug of bad milk.",
        "Few gulps galvanized the mock jury box.",
        "Sex prof gives back no quiz with mild joy.",
        "Quest judge wizard bonks foxy chimp love.",
        "Fix problem quickly with galvanized jets.",
        "Watch Jeopardy, Alex Trebek's fun TV quiz game.",
        "Woven silk pyjamas exchanged for blue quartz.",
        "The lazy major was fixing Cupid's broken quiver.",
        "Amazingly few discotheques provide jukeboxes.",
        "Foxy diva Jennifer Lopez wasn't baking my quiche.",
        "Fax back's Jim's Gwyneth Paltrow video quiz.",
        "My girl wove six dozen plaid jackets before she quit.",
        "Then a cop quizzed Mick Jagger's ex-wives briefly.",
        "Painful zombies quickly watch a jinxed graveyard.",
        "Grumpy wizards make a toxic brew for the jovial queen.",
        "Cute, kind, jovial, foxy physique, amazing beauty? Wowser!",
        "Few black taxis drive up major roads on quiet hazy nights.",
        "The job of waxing linoleum frequently peeves chintzy kids.",
        "How razorback-jumping frogs can level six piqued gymnasts!"
      ];

      var chooseRandom = _.random(0, sentences.length - 1);
      var sentence = sentences[chooseRandom];
      return this.sentenceToWordArray(sentence);
    },

    nextSentence: function (m) {
      m.currentSentence = this.getSentence();
    },

    finished: function (m, $scope) {
      if ((m.currentSentence.length - 1) === m.pos) {
        Calc.updateCalcs(m);
        $scope.data = Calc.getData();
        m.gameOn = false;
        if (count === 1) {
          m.gameOver = true;
        } else {
          this.nextSentence(m);
        }
      }
    },

    start: function (m) {
      m.gameOn = true;
      m.startTime = performance.now();
    }
  };
});
