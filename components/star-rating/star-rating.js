            // Interactive rating system
            const stars = document.querySelectorAll('.star');
            let selectedRating = 4; // Default rating (4 out of 5)
            
            // Initialize rating display
            updateStars(selectedRating);
            
            stars.forEach(star => {
                // Hover effects
                star.addEventListener('mouseenter', function() {
                    const value = parseInt(this.getAttribute('data-value'));
                    highlightStars(value);
                });
                
                star.addEventListener('mouseleave', function() {
                    highlightStars(selectedRating);
                });
                
                // Click to set rating
                star.addEventListener('click', function() {
                    selectedRating = parseInt(this.getAttribute('data-value'));
                    updateStars(selectedRating);
                    
                    // Here you could add code to submit the rating to a backend
                    console.log('User rated:', selectedRating);
                    
                    // Update UI to show user has rated
                    document.getElementById('rating-count').textContent = 37; // Increment the count
                    
                    // Optional: Show a thank you message
                    const ratingParent = document.querySelector('.rating').parentNode;
                    const thankYouMsg = document.createElement('div');
                    thankYouMsg.className = 'text-green-500 text-sm ml-2';
                    thankYouMsg.textContent = 'Thanks for rating!';
                    
                    // Remove any existing message first
                    const existingMsg = ratingParent.querySelector('.text-green-500');
                    if (existingMsg) ratingParent.removeChild(existingMsg);
                    
                    ratingParent.appendChild(thankYouMsg);
                    
                    // Fade out the message after 3 seconds
                    setTimeout(() => {
                        thankYouMsg.style.opacity = '0';
                        thankYouMsg.style.transition = 'opacity 1s';
                        setTimeout(() => {
                            if (thankYouMsg.parentNode) {
                                thankYouMsg.parentNode.removeChild(thankYouMsg);
                            }
                        }, 1000);
                    }, 3000);
                });
            });
            
            function highlightStars(count) {
                stars.forEach(star => {
                    const value = parseInt(star.getAttribute('data-value'));
                    if (value <= count) {
                        star.classList.remove('text-gray-300');
                        star.classList.add('text-yellow-400');
                    } else {
                        star.classList.remove('text-yellow-400');
                        star.classList.add('text-gray-300');
                    }
                });
            }
            
            function updateStars(count) {
                highlightStars(count);
            }