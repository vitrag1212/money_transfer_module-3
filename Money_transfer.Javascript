const transferForm = document.querySelector('#transfer-form');
const transferStatus = document.querySelector('#transfer-status');

transferForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const fromAccount = document.querySelector('#from-account').value;
  const toAccount = document.querySelector('#to-account').value;
  const amount = document.querySelector('#amount').value;
  
  // Send a request to the server to transfer the money
  // Handle the response and display the result in the transferStatus div
});
