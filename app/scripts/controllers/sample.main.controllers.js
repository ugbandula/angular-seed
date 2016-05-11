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

    init();

    function init() {
      $scope.data = [];
    }

    $scope.readData = function readData() {
        dataService.getServiceData()
            .then(function(data) {
                $scope.data = data;
            })
    }
}
;
