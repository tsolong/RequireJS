require.config({
    baseUrl: 'js/',
    paths: {
        app: 'app',
        hello: 'hello'
    },
    shim: {
        hello: {
            exports: 'hello'
        }
    }
});

require(['app', 'hello'], function (app, hello) {
    app.msg();
    hello();
});