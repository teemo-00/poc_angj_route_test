/// <reference path="../../typings/modules/angular/index.d.ts" />

/**
 * Main AngularJS Web Application 
 */

var rvTuskApp = angular.module('rvTuskApp', ['ngRoute']);

/*
* Set Up routing
*/

rvTuskApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
    console.log('Config route section!');

    $routeProvider
        .when('/', {
            template: 'main....'
        })
        .when('/a1', 
        {             
               //controller: 'SimpleController',
               //templateUrl: 'partials/load_file_1.html'
               template: 'asdfsadfasdfasdf'
               //reditectTo: '/partials/load_file_1.html'
        })
        .otherwise({ template: '/yyyyyy'});

    //$locationProvider.html5Mode(true);
});

 