document.addEventListener('DOMContentLoaded', function() {
    const minRange = document.getElementById('minRange');
    const maxRange = document.getElementById('maxRange');
    const minValue = document.getElementById('minValue');
    const maxValue = document.getElementById('maxValue');
    const progress = document.getElementById('progress');
    
    const minGap = 10;
    const maxRangeValue = 500;
    
    let min = 50;
    let max = 200;
    
    function updateProgress() {
        const left = (min / maxRangeValue) * 100;
        const right = (max / maxRangeValue) * 100;
        progress.style.left = `${left}%`;
        progress.style.width = `${right - left}%`;
    }
    
    function handleInput(type) {
        if (max - min < minGap) {
            if (type === 'min') {
                min = max - minGap;
                minRange.value = min;
            } else {
                max = min + minGap;
                maxRange.value = max;
            }
        }
        updateValues();
    }
    
    function updateValues() {
        minValue.textContent = `$${min}`;
        maxValue.textContent = `$${max}`;
        updateProgress();
    }
    
    minRange.addEventListener('input', function() {
        min = parseInt(this.value);
        handleInput('min');
    });
    
    maxRange.addEventListener('input', function() {
        max = parseInt(this.value);
        handleInput('max');
    });
    
    // Initialize
    updateProgress();
});