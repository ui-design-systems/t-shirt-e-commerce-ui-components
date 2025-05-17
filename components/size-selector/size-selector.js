            // Size selection handling
            const sizeOptions = document.querySelectorAll('.size-option');
            sizeOptions.forEach(option => {
                option.addEventListener('change', function() {
                    // Reset all labels
                    document.querySelectorAll('label[for^="size-"]').forEach(label => {
                        label.classList.remove('border-primary');
                        label.classList.add('border-gray-300');
                    });
                    
                    // Highlight selected label
                    const selectedLabel = document.querySelector(`label[for="${this.id}"]`);
                    selectedLabel.classList.remove('border-gray-300');
                    selectedLabel.classList.add('border-primary');
                    
                    console.log('Selected size:', this.value);
                });
            });