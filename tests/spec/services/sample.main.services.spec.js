

describe("dataService", function () {

  var $httpBackend, dataService, SERVICE_URLS;

  beforeEach(function () {
    module('sample.main.services');

    inject(function (_$httpBackend_, _dataService_, _SERVICE_URLS_) {
      $httpBackend = _$httpBackend_;
      dataService = _dataService_;
      SERVICE_URLS = _SERVICE_URLS_;
    });

  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe("getServiceData success", function () {

    beforeEach(function () {
      $httpBackend.when('GET', SERVICE_URLS.dataServiceURL).respond({data : getJSONFixture('sample.json')});
    });

    it("should exists", function () {
      expect(dataService.getServiceData).toBeDefined();
    });

    it("should return expected json result", function () {
      $httpBackend.expectGET(SERVICE_URLS.dataServiceURL);
      var res = dataService.getServiceData();
      res.then(function(response){
          expect(response.data.success).toBe(true);
      });
      $httpBackend.flush();
    });

  });

  describe("getServiceData failure", function () {

    beforeEach(function () {
      $httpBackend.when('GET', SERVICE_URLS.dataServiceURL).respond(500, 'something went wrong');
    });

    it("should return expected error", function () {
      $httpBackend.expectGET(SERVICE_URLS.dataServiceURL);
      var res = dataService.getServiceData();
      res.then(function(response){
        expect(response).toBe('something went wrong');
      });
      $httpBackend.flush();
    });
  });
});
