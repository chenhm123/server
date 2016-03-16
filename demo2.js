/**
 * Created by wb-chm174910 on 2016/3/15.
 */
var ventor = {
    add:function(a,b){
        return a+b;
    }
}

var module = (function(ve){
    var exports = {};
    exports.result = ve.add(1,2);
    return exports;
})(ventor)

console.log(module.result)