/**
 *  Created by Bandula Gamage
 */

'use strict';

/**
 * -------------------------------------------------------------------
 *  Timestamp Marker Intercepter Definition
 * -------------------------------------------------------------------
 */

angular
    .module('sample.main.intercepters')
    .factory('timestampMarker', timestampMarker);

timestampMarker.$inject = [];

function timestampMarker() {
    var timestampMarker = {
        request: function(config) {
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function(response) {
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return timestampMarker;
}

angular.module('sample.main.intercepters')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('timestampMarker');
    }]);