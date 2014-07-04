'use strict';

describe('Controller: FinishedCtrl', function () {

  // load the controller's module
  beforeEach(module('typeRiterApp'));

  var FinishedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FinishedCtrl = $controller('FinishedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
