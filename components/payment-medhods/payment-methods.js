// Make payment method cards selectable
const paymentCards = document.querySelectorAll('.payment-card');
paymentCards.forEach(card => {
    card.addEventListener('click', function() {
        // Deselect all cards
        paymentCards.forEach(c => c.classList.remove('selected'));
        
        // Select clicked card
        this.classList.add('selected');
        
        // Find the radio button inside this card and select it
        const radioId = this.dataset.payment;
        document.getElementById(radioId).checked = true;
    });
});