define(['modules/logger'], function (logger) {
    return {
        firstName: 'tso',
        lastName: 'long',
        sayHello: function () {
            logger.log('hello');
        }
    }
})