function inherit(proto) {
    function F() {}
    F.prototype = proto;
    var object = new F();
    return object;
}