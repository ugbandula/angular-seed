(function() {
  'use strict';
  jasmine.getJSONFixtures().fixturesPath='base/tests/mocks';
}());

var getJSON = function(fileName){
  getJSONFixture(fileName);
}
