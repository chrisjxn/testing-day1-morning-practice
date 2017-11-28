const functions = require('./functions');

test('The returnsChris function returns Chris', () => {
    // Arrange
    // Nothing to setup

    // Act
    let result = functions.returnsChris();

    // Assert
    expect(result).toBe('Chris');
})

describe('Add Function', () => {

    test('The add function adds 3 and 5 to get 8', () => {
        // Arrange
        let num1 = 3;
        let num2 = 5;

        // Act
        let result = functions.add(num1, num2);

        // Assert
        expect(result).toBe(8);
    })

    test('The add function adds -3 and 5 to get 2', () => {
        // Arrange
        let num1 = -3;
        let num2 = 5;

        // Act
        let result = functions.add(num1, num2);

        // Assert
        expect(result).toBe(2);
    })

    test('The add function adds 0.1 and 0.2 to get 0.3', () => {
        // Arrange
        let num1 = 0.1;
        let num2 = 0.2;

        // Act
        let result = functions.add(num1, num2);

        // Assert
        expect(result).toBeCloseTo(0.3); // using toBeCloseTo for floating point decimals. Using toBe fails
    })

    test('The add function should return "Bad Data" for "panda" and 5', () => {
        // Arrange
        let num1 = 'panda';
        let num2 = 5;

        // Act
        let result = functions.add(num1, num2);

        // Assert
        expect(result).toBe('Bad Data');
    })

})

describe('Multiply Function', () => {

    test('The multiply function multiplies 5 and 6 to get 30', () => {
        let num1 = 5;
        let num2 = 6;

        let result = functions.multiply(num1, num2);

        expect(result).toBe(30);
    })
})
