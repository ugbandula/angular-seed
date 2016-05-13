
/*
  Unit tests for data services.
*/

// describe the service meant for testing
describe("dataService", function () {

  var $httpBackend, dataService, SERVICE_URLS;

  // Before each test, load the service so it will be available for instantiating
  beforeEach(function () {
    module('sample.main.services');

    // create instance of $injector and the function parameters are automatically
    // name matched by the angular mocks by 'Underscore resolver'.
    inject(function (_$httpBackend_, _dataService_, _SERVICE_URLS_) {
      $httpBackend = _$httpBackend_;
      dataService = _dataService_;
      SERVICE_URLS = _SERVICE_URLS_;
    });

  });

  // Verify there are no outstanding requests. If any pending, error will be thrown
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // Describe the method - success scenarios
  describe("getServiceData success", function () {

    // Set up the backend mock for $http
    beforeEach(function () {
      $httpBackend.when('GET', SERVICE_URLS.dataServiceURL).respond({data : getJSONFixture('sample.json')});
    });

    it("should exists", function () {
      expect(dataService.getServiceData).toBeDefined();
    });

    // Testing expected successfull response
    it("should return expected json result", function () {
      // expect a get request on a particular URL
      $httpBackend.expectGET(SERVICE_URLS.dataServiceURL);

      // Call the service
      var res = dataService.getServiceData();

      // res is a promise which has then API to callback function
      res.then(function(response){
          expect(response.data.success).toBe(true);
      });

      // Flush out the httpBackend. without, you will be thrown to exception
      $httpBackend.flush();
    });

  });

  // Describe the method - failure scenarios
  describe("getServiceData failure", function () {

    var errorMessage = expectedMessage = 'something went wrong';

    // Set up the $http to responde with a error
    beforeEach(function () {
      $httpBackend.when('GET', SERVICE_URLS.dataServiceURL).respond(500, errorMessage);
    });

    // Testing expected failure behavious
    it("should return expected error", function () {
      $httpBackend.expectGET(SERVICE_URLS.dataServiceURL);
      var res = dataService.getServiceData();
      res.then(function(response){
        expect(response).toBe(expectedMessage);
      });
      $httpBackend.flush();
    });
  });
});