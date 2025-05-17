            // Make address cards selectable
            const addressCards = document.querySelectorAll('.address-card');
            addressCards.forEach(card => {
                card.addEventListener('click', function() {
                    // Deselect all cards
                    addressCards.forEach(c => c.classList.remove('selected'));
                    
                    // Select clicked card
                    this.classList.add('selected');
                    
                    // Find the radio button inside this card and select it
                    const radioId = this.dataset.address;
                    document.getElementById(radioId).checked = true;
                });
            });