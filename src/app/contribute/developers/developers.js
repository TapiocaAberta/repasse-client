'use strict';

angular.module('testApiApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('developers', {
                url: '/developers',
                templateUrl: 'app/contribute/developers/developers.html',
                controller: 'DevelopersCtrl'
            });
    });