// Function to create thank-you cards
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages; // Ensure we return the array
  }
  
  // Function to count down from a given number
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrement to avoid infinite loop
    }
  }
  
  // Test the functions
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday")); // Expected output: Array of thank-you messages
  countDown(10); // Expected output: Numbers from 10 to 0
  
  // Export functions for testing
  module.exports = { writeCards, countDown };
  
  