define(['backbone'], function (Backbone) {
    console.log('loading about view');
    var aboutView = Backbone.View.extend({
        el: $('#main'),
        /*
        initialize: function () {
            console.log('aboutView initialized');
            $("body").html(this.el);
            this.render();
        },*/
        render: function () {
            console.log('render aboutView');
            this.$el.html("<h1>This is the about page</h1><a href='#users'>Go to users</a>");
        }
    });

    return aboutView;

})