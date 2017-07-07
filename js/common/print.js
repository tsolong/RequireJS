define(['jquery'], function ($) {
    var printMsg = function (msg) {
        $('body').append('<p>' + msg + '</p>')
    };
    return {
        printMsg: printMsg
    }
});