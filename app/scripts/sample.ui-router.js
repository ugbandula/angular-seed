/**
 * Created by Bandula Gamage on 1/12/2015.
 */
'use strict';

angular
    .module('sample')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            ////////////////////
            // Home Page view //
            ////////////////////
                .state("/", {
                    url: "/",
                    templateUrl: "views/home.html"
                })
                .state("home", {
                    url: "/home",
                    templateUrl: "views/home.html"
                })
                ////////////////////
                // 404 Error Page //
                ////////////////////
                .state("404", {
                    url: "/404",
                    templateUrl: "views/404.html",
                    controller: "ErrorController"
                });

            // Send to login if the URL was not found
            $urlRouterProvider.otherwise("/");
        }
    ]);

