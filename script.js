document.querySelector('button').addEventListener('click', function() {
    // Get the values from the input fields
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);

    // Check if the inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2; // Compute the sum
        document.getElementById('sum').value = sum; // Display the sum in the readonly input
        document.getElementById('sumlabel').textContent = "The sum is:"; // Update the label text
    } else {
        document.getElementById('sumlabel').textContent = "Please enter valid numbers."; // Error message
        document.getElementById('sum').value = ''; // Clear the sum input
    }
});
