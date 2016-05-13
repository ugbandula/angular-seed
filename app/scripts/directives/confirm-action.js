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

confirmAction.$inject = ['$window'];

/**
 * A generic confirmation for risky actions.
 * Usage: Add attributes: ng-really-message="Are you sure"? ng-really-click="takeAction()" function
 */

function confirmAction($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        var $elm = angular.element(element);        
        var message = attrs.ngReallyMessage;
        if (message && $window.confirm(message)) {
          scope.$apply(attrs.ngReallyClick);
        }
      });
    }
  }
}

;
