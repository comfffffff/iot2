var outer = (function () {
    var a = 1;
    var inner = function () {
        return ++a;
    };
    return inner;
})();
console.log(outer());
console.log(outer());
outer = null;

var a = 0;
var intervalId = null;
var inner = function () {
    if (++a >= 10) {
        clearInterval(intervalId);
        inner = null; 
    }
    console.log(a);
};
intervalId = setInterval(inner, 1000);
}) ();