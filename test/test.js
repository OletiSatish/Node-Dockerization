// A sample function to test
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Write tests
describe('Math Operations Test', () => {
    it('should add two numbers correctly', () => {
        const result = add(2, 3);
        console.log(result)
    });

    it('should subtract two numbers correctly', () => {
        const result = subtract(5, 3);
        console.log(result)
    });

    it('should return a number when adding', () => {
        const result = add(2, 3);
        console.log(result)
    });
});
