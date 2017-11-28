let cart = [];

module.exports = {
    addItemToCart: function (product) {
        cart.push(product);
    },
    removeItemFromCart: function (product) {
        let index = cart.indexOf(product);
        if (index > -1) {
            cart.splice(index, 1);
        }
    },
    getTotal: function () {
        return cart.reduce((total, product) => total + product.price, 0);
    },
    getCart: function () {
        return cart;
    },
    clearCart: function () {
        cart = [];
    }
}