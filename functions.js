module.exports = {
    returnsChris: function () {
        return 'Chris';
    },
    add: function (x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            return "Bad Data";
        }
        return x + y;
    },
    multiply: function (x, y) {
        return x * y;
    }
}