/**
 *  Created by Bandula Gamage
 */

'use strict';

/**
 * -------------------------------------------------------------------
 *  Text Slider Directive Definition
 * -------------------------------------------------------------------
 */

angular
    .module('sample.main.directives')
    .directive('confirmAction', confirmAction);

confirmAction.$inject = [];

/**
 * A generic confirmation for risky actions.
 * Usage: Add attributes: ng-really-message="Are you sure"? ng-really-click="takeAction()" function
 */
function confirmAction() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}

;