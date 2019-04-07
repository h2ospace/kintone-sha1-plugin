(function(PLUGIN_ID) {
    "use strict";

    var old_password;
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    var events = [
        'app.record.create.show',
        'mobile.app.record.edit.show',
        'app.record.edit.show',
        'mobile.app.record.edit.show'
    ];

    kintone.events.on(events, function (event) {
        var record = event.record;

        if (record[config.sha1_field] == undefined) {
            window.alert('SHA1パスワードに設定されたフィールドが存在しません');
            return false;
        }

        old_password = record[config.sha1_field]['value'];

        return event;
    });

    events = [
        'app.record.create.submit',
        'mobile.app.record.create.submit',
        'app.record.edit.submit',
        'mobile.app.record.edit.submit'
    ];

    kintone.events.on(events, function (event) {
        var record = event.record;

        // 旧パスワードと違う場合は SHA1で暗号化
        var password = record[config.sha1_field]['value'];
        if (old_password != password) {
            record[config.sha1_field]['value'] = CybozuLabs.SHA1.calc(password);
        }

        console.log(config.sha1_field);

        return event;
    });
})(kintone.$PLUGIN_ID);