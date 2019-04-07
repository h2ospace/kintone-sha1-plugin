(function() {
    'use strict';
    // no-undef(_)
    _.map([1, 2, 3], function(n) {
        return n * 2;
    });

    function hoge(a) {
        if (a) {
            return 'ok';
        // no-else-return
        } else {
            return 'ng';
        }
    }
    hoge();
})();
