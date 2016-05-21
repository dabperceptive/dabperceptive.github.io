define([], function () {
    if (ViewManager == undefined) {
        var ViewManager = {
            currentView: null,
            showView: function (view) {
                if (this.currentView !== null && this.currentView.cid != view.cid) {
                    this.currentView.remove();
                }
                this.currentView = view;
                return view.render();
            }
        }

        return ViewManager;
    }
});