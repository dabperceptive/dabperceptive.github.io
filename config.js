require.config({
    baseUrl: 'js/',
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore_scr', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    },
    paths: {
        "jquery": "/libs/jquery.min",
        "underscore_scr": "/libs/underscore-min",
        "backbone": "/libs/backbone-min",
        "handlebars": "/libs/handlebars.min",
        'bootstrap': "/libs/bootstrap.min"
    }
});

require.onError = function (err) {
    alert(err);
    return;
    if (err.requireType === 'timeout') {
        // tell user
        alert("error: " + err);
    } else {
        throw err;
    }
};