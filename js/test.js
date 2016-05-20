define(['jquery'], function () {

    return {
        sayHello: function () {
            var el = $("#title");
            el.html('<b>Hello Tester</b>');
            console.log('write hello tester done');
        }
    }
});