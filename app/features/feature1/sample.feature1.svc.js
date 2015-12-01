/**
 *  Created by Bandula Gamage
 */
'use strict';

angular
    .module('sample.features.feature1')
    .service('feature1Service', feature1Service);

feature1Service.$inject = ['PROCESS_STATUS'];

function feature1Service(PROCESS_STATUS) {
    var localVariable = false;

    var service = {
        method1: method1,
        method2: method2
    };

    return service;

    // Method implementation details

    function method1() {
        // Implementation details goes here
    }

    function method2() {
        // Implementation details goes here
    }
}
;