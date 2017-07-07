define(['jquery'], function () {
    return {
        add: function (x, y) {
            console.log($('body').length);
            return x + y;
        }
    }
});