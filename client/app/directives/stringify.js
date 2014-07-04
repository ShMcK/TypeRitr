'use strict';

app.filter('stringify', function () {
  return function (input) {
    var sentence = '';
    _.forEach(input, function (word) {
      sentence += word + ' ';
    });
    return sentence;
  };
});
