/**
 *  Created by Bandula Gamage
 */

'use strict';

/**
 * Session service implementation
 */
angular
    .module('sample.main.services')
    .factory('sessionService', sessionService);

sessionService.$inject = ['$http', '$q', 'SERVICE_URLS'];

function sessionService($http, SERVICE_URLS) {
    var loggedInUser    = {};
    var prevCredentials = {};

    return {
        authenticate:   authenticate,
        isAuthenticated:isAuthenticated,
        isAuthorized:   isAuthorized,
        disposeSession: disposeSession
    };

    /**
     * Authenticates the user with provided user credentials.
     *
     * @param credentials
     * @returns {*}
     */
    function authenticate(credentials) {
        return $http.post(SERVICE_URLS.authServiceURL, credentials)
            .then(getServiceDataCompleted)
            .catch(getServiceDataFailed);

        function getServiceDataCompleted(response) {
            if (response.data.token) {
                // Store the successful credentials
                prevCredentials = credentials;

                // Extract the logged in user details
                loggedInUser = {
                    //index:      response.data.index,
                    username:   response.data.username,
                    isAdmin:    response.data.adminUser,
                    token:      response.data.token
                };
                return response.data;
            } else {
                console.log('XHR failed for getServiceData ' + error.data);
                return $q.reject(error);
            }
        }

        function getServiceDataFailed(error) {
            console.log('XHR failed for getServiceData ' + error.data);
            return $q.reject(error);
        }
    }

    // TODO - Need to complete
    function reLogin() {

    }

    /**
     * Checks whether the user has already authenticated.
     *
     * @returns {boolean}
     */
    function isAuthenticated() {
        if (loggedInUser.token)
            return true;
        else
            return false;
    }

    /**
     * Checks whether the user has already authorized.
     *
     * @returns {boolean}
     */
    function isAuthorized() {
        if (loggedInUser.isAdmin)
            return true;
        else
            return false;
    }

    /**
     * Disposes the already logged in session.
     */
    function disposeSession() {
        loggedInUser = {};
    }

    /**
     * Returns the logged in user details.
     *
     * @returns {{}}
     */
    function getLoggedUser() {
        return loggedInUser;
    }

}