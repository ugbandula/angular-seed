/**
 *  Created by Bandula Gamage
 */

'use strict';

/**
 * -------------------------------------------------------------------
 *  Directive Definitions
 * -------------------------------------------------------------------
 */

angular
    .module('sample.main.services', ['sample.features.config'])
    .factory('dataService', dataService);

dataService.$inject = ['$http', 'SERVICE_URLS'];

function dataService($http, SERVICE_URLS) {
    return {
        getServiceData: getServiceData
    };

    function getServiceData() {
        return $http.get(SERVICE_URLS.dataServiceURL)
            .then(getServiceDataCompleted)
            .catch(getServiceDataFailed);

        function getServiceDataCompleted(response) {
            return response.data;
        }

        function getServiceDataFailed(error) {
            console.log('XHR failed for getServiceData ' + error.data);
        }
    }

}

;