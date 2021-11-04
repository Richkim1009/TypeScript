{
    var C = /** @class */ (function () {
        function C(foo) {
            this.foo = foo;
        }
        return C;
    }());
    var c = new C('instance of C');
    var d = { foo: 'object literal' };
    console.log(c);
}
