
// Directive tests for confirmAction
describe('directive: confirmAction', function() {

  var element, scope, compile, fakeWindow;

  beforeEach(module('sample.main.directives'));

  beforeEach(function() {
    // define fake instance for $window
    module(function($provide) {
       fakeWindow = jasmine.createSpyObj('$window', ['confirm'])
       $provide.value('$window', fakeWindow)
    });
  });

  // set up the scope instance and compile (directive) to global
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  // Test the click event on element to check for window confirm
  describe('with the given message', function() {

    it("should pop up confirm window", function() {
      var element = angular.element('<div id="test" confirm-action ng-really-message="Are you sure?"></div>');
      var compiledElement = compile(element)(scope);
      compiledElement.triggerHandler('click');
      expect(fakeWindow.confirm).toHaveBeenCalled();
    });

    it("should not pop up confirm window when message is empty", function() {
      var element = angular.element('<div id="test" confirm-action ng-really-message=""></div>');
      var compiledElement = compile(element)(scope);
      compiledElement.triggerHandler('click');
      expect(fakeWindow.confirm).not.toHaveBeenCalled();
    });

  });
});
