define(['backbone'], function () {
    //more details: http://backbonejs.org/#Router
    return {
        init: function () {
            var AppRouter = Backbone.Router.extend({

                execute: function (callback, args, name) {
                    console.log("execute routing", name);
                    if (! /*loggedIn*/ true) {
                        //goToLogin();
                        alert("not logged in")
                        return false;
                    }
                    //args.push(parseQueryString(args.pop()));
                    if (callback) callback.apply(this, args);
                },
                routes: {
                    "about": "about",
                    "pr": "pullRequest",
                    "search/:query": "search", // #search/kiwis
                    "search/:query/p:page": "search" // #search/kiwis/p7
                },

                about: function () {
                    alert("about")
                },

                pullRequest: function () {
                    alert("pull request");
                },
                search: function (query, page) {
                    alert("search")
                }

            });

            // Initiate the router
            var app_router = new AppRouter;

            app_router.on('route:defaultRoute', function (actions) {
                alert(actions);
            });
            // Start Backbone history a necessary step for bookmarkable URL's
            Backbone.history.start();

            console.log('routes initialized');
            return app_router;
        }
    };
});