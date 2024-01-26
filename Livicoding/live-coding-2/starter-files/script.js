// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


    function fetchAnswer() {
      errorText.textContent = '';
  
      answerDiv.textContent = 'Thinking...';
  
      const question = questionInput.value;
  
      fetch('https://yesno.wtf/api')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
 
          answerDiv.textContent = data.answer;
  
          questionInput.value = '';
  
          setTimeout(() => {
            answerDiv.textContent = '';
          }, 3000);
        })

    }