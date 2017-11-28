'use strict'
const cart = require('./cart');

describe('Cart', () => {

    describe('Can add item to cart', () => {

        test('Can add banana to cart', () => {
            // Arrange
            let product = {
                id: 1,
                name: 'banana',
                price: 0.75
            };

            // Action
            cart.addItemToCart(product);
            let result = cart.getCart().indexOf(product);

            // Assert
            expect(result).not.toBe(-1); // use toEqual for arrays and objects and toBe for primitives
        })
    })

    describe('Can remove items from cart', () => {

        test('Can remove peach from cart when peach is present', () => {
            // Arrange
            let product = {
                id: 2,
                name: 'peach',
                price: 1.50
            }

            // Action
            cart.addItemToCart(product);
            cart.removeItemFromCart(product);
            let result = cart.getCart().indexOf(product);

            // Assert
            expect(result).toBe(-1); // can also use toContain, which doesn't require indexOf - see Jest documentation
        })

        test('Does not remove anything if tries to remove apple but apple is not present', () => {
            // Arrange
            let product = {
                id: 3,
                name: 'apple',
                price: 1.50
            }

            // Action
            let iniitalCount = cart.getCart().length;
            cart.removeItemFromCart(product);
            let result = cart.getCart().length;

            // Assert
            expect(result).toBe(iniitalCount);
        })
    })

    describe('Calculates totals correctly', () => {

        beforeEach(() => {
            cart.clearCart();
        });

        test('getTotal returns 0 when cart is emply', () => {
            // Arrange

            // Action
            let result = cart.getTotal();

            // Assert
            expect(result).toBe(0);
        })

        test('getTotal returns 1.50 when ony an apple is in the cart', () => {
            // Arrange
            let product = {
                price: 1.50,
                name: 'apple'
            }
            cart.addItemToCart(product);

            // Action
            let result = cart.getTotal();

            // Assert
            expect(result).toBe(1.50);
        })

        test('getTotal returns correct sum for 3 items', () => {
            // Arrange
            let p1 = 1.00;
            let p2 = 2.00;
            let p3 = 9.99;
            let product1 = {
                price: p1
            }

            let product2 = {
                price: p2
            }

            let product3 = {
                price: p3
            }

            cart.addItemToCart(product1);
            cart.addItemToCart(product2);
            cart.addItemToCart(product3);

            // Action
            let result = cart.getTotal();

            // Assert
            expect(result).toBeCloseTo(p1 + p2 + p3);
        })
    })
})