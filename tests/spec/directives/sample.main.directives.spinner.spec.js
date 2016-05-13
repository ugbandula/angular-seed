
// Directive tests for loading-spinner
describe('directive: loading-spinner', function() {

  var element, scope, compile, http;

  beforeEach(module('sample.main.directives'));

  // set up the scope instance and compile (directive) to global
  beforeEach(inject(function($rootScope, $http, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
    http = $http;
    scope.$digest();
  }));

  // Test the click event on element to check for document confirm
  describe('spinner', function() {

    it("Should spinner appear when http requests are pending", function() {
      // faking http requests
      http.pendingRequests = [1];
      var element = angular.element('<us-spinner></us-spinner>');
      var compiledElement = compile(element)(scope);
      scope.$digest();
      expect(compiledElement.hasClass('ng-hide')).toBe(false);
    });

    it("Should spinner appear when http requests are pending", function() {
      // faking http requests
      http.pendingRequests = [];
      var element = angular.element('<us-spinner></us-spinner>');
      var compiledElement = compile(element)(scope);
      scope.$digest();
      expect(compiledElement.hasClass('ng-hide')).toBe(true);
    });


  });
});
