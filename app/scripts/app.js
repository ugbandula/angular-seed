/**
 *  Created by Bandula Gamage
 */

//============================================================================
// MODULE DECLARATION
// - Declare app level modules which depends on filters, and services
//============================================================================
"use strict";

var smartApp = angular.module('sample', [
    'ui.router',                        // Angular ui-router
    'ui.bootstrap',                     // Angular-UI Bootstrap library
    'sample.main.directives',           // Directives
    'sample.main.filters',              // Filter definitions
    'sample.main.services',             // Services
    'sample.main.controllers',          // Controllers
    'sample.features.config',
    'sample.features.feature1',
    'angularSpinner',
    'ngLoadingSpinner'
]);

// Listens to Route Change events and validates those actions and take
// appropriate actions.
smartApp.run(function ($rootScope, $location, $window, $state) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
    });
});