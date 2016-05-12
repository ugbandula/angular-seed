

describe('MainController', function () {

    var $controller, $scope, $timeout, $q, dataServiceMock, deferred, spyPromise;

    beforeEach(function () {

      // This loads in the module it's given, so it is available in your tests.
      module('sample.main.controllers');

      /*
      To help with this, the injected parameters can, optionally, be enclosed with underscores.
      These are ignored by the injector when the reference name is resolved.
      For example, the parameter _$controller_ would be resolved as the reference $controller.
      Since it is available in the function body as $controller, we can then assign it to a variable defined in an outer scope.
      */
      inject(function(_$rootScope_, _$controller_, _$q_, _$timeout_){
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        $q = _$q_;
        $timeout = _$timeout_;

        // Spy the service and fake the async return value to local data
        dataServiceMock = jasmine.createSpyObj('dataService',['getServiceData']);
        dataServiceMock.getServiceData.and.returnValue(getPromise($q, 'sample.json'));

        // Then we can use inject to access $controller, the service that is responsible for instantiating controllers.
        $controller('MainController', { $scope: $scope, dataService: dataServiceMock});
      });

    });

    // Set up specs here for $scope of the $controller
    describe('$scope', function () {

        it('data initialised with empty array', function () {
            expect($scope.data).toEqual([]);
            expect(dataServiceMock.getServiceData).toBeDefined();
        });

        it("successfull data on data read", function () {
          $scope.readData();
          expect(dataServiceMock.getServiceData).toHaveBeenCalled();
          $timeout.flush();
          expect($scope.data).toEqual(getJSONFixture('sample.json'));
        });
    });

});
