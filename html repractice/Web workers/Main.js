// Main.js

const worker = new Worker('worker.js');  

// Select DOM elements
const numberInput = document.getElementById('numberInput');
const startButton = document.getElementById('startButton');
const resultDiv = document.getElementById('result');

startButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    resultDiv.textContent = 'Processing...';

    worker.postMessage(number);
});

worker.onmessage = function (e) {
    const result = e.data;  
    resultDiv.textContent = `Result: ${result}`;
};

// Handle errors in the worker
worker.onerror = function (error) {
    console.error('Worker error:', error.message);
    resultDiv.textContent = 'Error occurred while processing the task.';
};
