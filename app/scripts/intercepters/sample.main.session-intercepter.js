/**
 *  Created by Bandula Gamage
 */

'use strict';

/**
 * -------------------------------------------------------------------
 *  Session Intercepter Definition
 * -------------------------------------------------------------------
 */

angular
    .module('sample.main.intercepters')
    .factory('sessionInjector', sessionInjector);

sessionInjector.$inject = ['sessionService'];

function sessionInjector(sessionService) {
    var sessionInjector = {
        request: function(config) {
            if (sessionService.isAuthenticated()) {
                config.headers['x-session-token'] = sessionService.getLoggedUser().token;
            }
            return config;
        }
    };
    return sessionInjector;
}

angular.module('sample.main.intercepters')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('sessionInjector');
    }]);