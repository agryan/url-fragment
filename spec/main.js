requirejs.config({
    baseUrl: '..',
    paths: {
        'QUnit': 'lib/qunit/qunit',
        'underscore': 'lib/underscore'
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function() {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        },
        'underscore': {
            exports: '_'
        }
    }
});

requirejs(['QUnit',
           'spec/spec_urlfragment'], function(QUnit) {
    QUnit.load();
    QUnit.start();
});
