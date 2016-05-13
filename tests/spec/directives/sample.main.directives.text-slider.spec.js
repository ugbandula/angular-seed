
// Directive tests for text slider
describe('directive: text-slider', function() {

  var scope, compile, document;

  beforeEach(module('sample.main.directives'));

  // set up the scope instance and compile (directive) to global
  beforeEach(inject(function($rootScope, $compile, $document) {
    scope = $rootScope.$new();
    compile = $compile;
    document = $document;
  }));

  // Test the click event on element to check for document confirm
  describe('with the given message', function() {

    it("should change the body style font size", function() {

      var element = angular.element('<text-size-slider min="12" max="24" unit="px" value="18" step="0">');
      var compiledElement = compile(element)(scope);
      scope.$digest();
      expect(document[0].body.style.fontSize).toEqual('18px');
    });

  });
});
