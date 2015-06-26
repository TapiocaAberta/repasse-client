'use strict';

angular.module('testApiApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('explore', {
                url: '/explore',
                templateUrl: 'app/analyse/explore/explore.html',
                controller: 'ExploreCtrl'
            });
    });