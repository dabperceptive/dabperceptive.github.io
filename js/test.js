define(['jquery'], function () {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    return {
        sayHello: function () {
            var el = $("#title");
            el.html('<b>Hello Tester</b>');
            console.log('write hello tester done');
        }
    }
});