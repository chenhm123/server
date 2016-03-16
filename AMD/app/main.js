/**
 * Created by wb-chm174910 on 2016/3/15.
 */
define(['app/message','print'],function (messages,print) {
    print(messages.getHello());
});

/*define(function (require) {

    var messages = require('app/message');

    var print = require('print');

    print(messages.getHello());
})*/
