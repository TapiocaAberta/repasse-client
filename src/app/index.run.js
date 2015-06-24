(function() {
    'use strict';

    angular
        .module('repasses')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();