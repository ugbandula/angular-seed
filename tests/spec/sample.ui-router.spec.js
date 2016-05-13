
// Route testing
describe("sample app routing", function () {

  var stateProvider, urlRouterProvider, scope, location;

  beforeEach(function () {

    // set up the appl
    module('sample');

    // set up injector to get reference and templates
    inject(function($state, $urlRouter, $rootScope, $templateCache, $location){
      stateProvider = $state;
      urlRouterProvider = $urlRouter;
      scope = $rootScope;
      location = $location;
      $templateCache.put("views/home.html","")
      $templateCache.put("views/404.html","")
    });

  });

  it("should redirect to root route", function () {
    stateProvider.transitionTo("/");
    scope.$apply();
    expect(stateProvider.current.name).toEqual("/");
  });

  it("should redirect to home route", function () {
    stateProvider.transitionTo("home");
    scope.$apply();
    expect(stateProvider.current.name).toEqual("home");
    expect(stateProvider.current.url).toEqual("/home");
  });

  it("should redirect to 404 route", function () {
    stateProvider.transitionTo("404");
    scope.$apply();
    expect(stateProvider.current.name).toEqual("404");
    expect(stateProvider.current.url).toEqual("/404");
    expect(stateProvider.current.controller).toEqual("ErrorController");
  });

  it("should redirect to default route when unknown path", function () {
    location.path("/unknown");
    scope.$apply();
    expect(stateProvider.current.name).toEqual("/");
  });

});
