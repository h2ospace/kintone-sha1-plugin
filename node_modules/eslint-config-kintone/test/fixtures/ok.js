(function() {
    'use strict';

    function sum(a, b) {
        return a + b;
    }

    sum(10, 20);

    kintone.events.on('app.record.index.show', function() {
        $('<div />').text('foo');
    });
})();


