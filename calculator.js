// Get the result input element
const resultInput = document.querySelector('.result');

// Clear the result
function clearResult() {
  resultInput.value = '';
}

// Add a value to the result input
function addToResult(value) {
  resultInput.value += value;
}

// Evaluate the result
function calculateResult() {
  const result = eval(resultInput.value);
  resultInput.value = result;
}
