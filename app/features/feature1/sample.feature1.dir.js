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
    .module('sample.features.feature1')
    .directive('feature1Directive', feature1Directive);

feature1Directive.$inject = [];

function feature1Directive() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

        }
    }
}
;