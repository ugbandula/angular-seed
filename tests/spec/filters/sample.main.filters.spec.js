
/*
  Unit tests for filters
*/

// describe the filters
describe("Filters", function () {

  var $filter, cutLength;

  // Before each test, load the filters so it will be available for instantiating
  beforeEach(function () {
    module('sample.main.filters');

    // create instance of $injector and the function parameters are automatically
    // name matched by the angular mocks by 'Filter resolver'.
    // Filter in the name will be ignored
    inject(function (_$filter_, cutLengthFilter) {
      $filter = _$filter_;
      cutLength = cutLengthFilter;
    });

  });

  // check if the associated filter exists
  it("Exists", function () {
    expect($filter).toBeDefined();
    expect(cutLength).toBeDefined();
  });

  // Tests the filters as expected behaviours
  it("should cut length as expected", function () {
    expect(cutLength('Testing', true, 6, '…')).toEqual('Testin…');
    expect(cutLength('Testing', true, 1, 'temp string')).toEqual('Ttemp string');
    expect(cutLength('Testing ', true, 6)).toEqual('Testin …');
  });

});
