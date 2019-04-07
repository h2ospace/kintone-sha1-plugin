jQuery.noConflict();

(function($, PLUGIN_ID) {
    'use strict';

    var $form = $('.js-submit-settings');
    var $sha1_field = $('.js-text-message');

    function getSettingsUrl() {
        return '/k/admin/app/flow?app=' + kintone.app.getId();
    }

    var config = kintone.plugin.app.getConfig(PLUGIN_ID);
    if (config.sha1_field) {
        $sha1_field.val(config.sha1_field);
    }
    $form.on('submit', function(e) {
        e.preventDefault();
        kintone.plugin.app.setConfig({sha1_field: $sha1_field.val()}, function() {
            alert('アプリを更新して下さい');
            window.location.href = getSettingsUrl();
        });
    });
})(jQuery, kintone.$PLUGIN_ID);
