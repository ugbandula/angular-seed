/**
 *  Created by Bandula Gamage
 */

'use strict';

/**
 * -------------------------------------------------------------------
 *  Session Recoverer Definition
 * -------------------------------------------------------------------
 */

angular
    .module('sample.main.intercepters')
    .factory('sessionRecoverer', sessionRecoverer);

sessionRecoverer.$inject = ['$q', '$injector'];

function sessionRecoverer($q, $injector) {
    var sessionRecoverer = {
        responseError: function(response) {
            // Session has expired - status code: 419
            if (response.status == 419) {
                var sessionService = $injector.get('sessionService');
                var $http = $injector.get('$http');
                var deferred = $q.defer();

                // Create a new session (recover the session)
                // We use login method that logs the user in using the current credentials and
                // returns a promise
                sessionService.login().then(deferred.resolve, deferred.reject);

                // When the session recovered, make the same backend call again and chain the request
                return deferred.promise.then(function() {
                    return $http(response.config);
                });
            }
            return $q.reject(response);
        }
    };
    return sessionRecoverer;
}

angular.module('sample.main.intercepters')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('sessionRecoverer');
    }]);