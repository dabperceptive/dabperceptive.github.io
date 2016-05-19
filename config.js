require.config({
    baseUrl: 'js/',
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
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
        "underscore": "/libs/underscore-min",
        "backbone": "/libs/backbone-min",
        "handlebars": "/libs/handlebars.min",
        'bootstrap': "/libs/bootstrap.min"
    }
});