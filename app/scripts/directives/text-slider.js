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
    .directive('textSizeSlider', textSizeSlider);

textSizeSlider.$inject = ['$document'];

function textSizeSlider($document) {
    return {
        restrict: 'E',
        template: '<div class="text-size-slider"><span class="small-letter" ng-style="{ fontSize: min + unit }">A</span> <input type="range" min="{{ min }}" max="{{ max }}" step="{{ step || 0 }}" ng-model="textSize" class="slider" value="{{ value }}" /> <span class="big-letter" ng-style="{ fontSize: max + unit }">A</span></div>',
        scope: {
            min: '@',
            max: '@',
            unit: '@',
            value: '@',
            step: '@'
        },
        link: function (scope, element, attr) {
            scope.textSize = scope.value;
            scope.$watch('textSize', function (size) {
                $document[0].body.style.fontSize = size + scope.unit;
            });
        }
    }
}
;