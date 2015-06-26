'use strict';

describe('Controller: DevelopersCtrl', function() {

    // load the controller's module
    beforeEach(module('testApiApp'));

    var DevelopersCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        DevelopersCtrl = $controller('DevelopersCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        expect(1).toEqual(1);
    });
});