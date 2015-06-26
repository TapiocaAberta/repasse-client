'use strict';

angular.module('testApiApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'app/contribute/about/about.html',
                controller: 'AboutCtrl'
            });
    });