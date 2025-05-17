 // Quantity buttons
 const minusBtn = document.querySelector('.flex.items-center.border button:first-child');
 const plusBtn = document.querySelector('.flex.items-center.border button:last-child');
 const quantityInput = document.querySelector('.flex.items-center.border input');
 
 minusBtn.addEventListener('click', function() {
     let value = parseInt(quantityInput.value);
     if (value > 1) {
         quantityInput.value = value - 1;
     }
 });
 
 plusBtn.addEventListener('click', function() {
     let value = parseInt(quantityInput.value);
     quantityInput.value = value + 1;
 });