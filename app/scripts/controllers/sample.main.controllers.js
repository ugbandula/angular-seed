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
    .module('sample.main.controllers', [])
    .controller('MainController', MainController);

MainController.$inject = ['$scope', 'dataService'];

function MainController($scope, dataService) {
    $scope.data = [];

    init();

    function init() {
        console.log('<MainController> Initialized');
    }

    function readData() {
        dataService.getServiceData()
            .then(function(data) {
                $scope.data = data;
            })
    }
}
;