window.onload = function() {
    // Select all page pairs
    const pagePairs = document.querySelectorAll('.page-pair');
    let currentPairIndex = 0; // Start at the first pair

    // Function to show the current pair
    function showPagePair(index) {
        // Hide all page pairs
        pagePairs.forEach((pair, i) => {
            pair.style.display = i === index ? 'flex' : 'none';
        });

        // Update the progress bar
        updateProgressBar(index, pagePairs.length);

        // Control the visibility of 'Previous' and 'Next' buttons
        document.getElementById('prev-btn').style.display = index === 0 ? 'none' : 'inline-block';
        document.getElementById('next-btn').style.display = index === pagePairs.length - 1 ? 'none' : 'inline-block';
    }

    // Function to navigate to the previous page pair
    window.prevPage = function() {
        if (currentPairIndex > 0) {
            currentPairIndex--;
            showPagePair(currentPairIndex);
        }
    }

    // Function to navigate to the next page pair
    window.nextPage = function() {
        if (currentPairIndex < pagePairs.length - 1) {
            currentPairIndex++;
            showPagePair(currentPairIndex);
        }
    }

    // Function to update the progress bar
    function updateProgressBar(currentIndex, totalPairs) {
        const progressFill = document.getElementById('progress-fill');
        const lampIcon = document.getElementById('lamp-icon');
        const progressPercentage = ((currentIndex + 1) / totalPairs) * 100;
        
        // Update the width of the progress fill
        progressFill.style.width = progressPercentage + '%';

        // Move the lamp icon to the edge of the progress fill
        lampIcon.style.left = `calc(${progressPercentage}% - 15px)`; // Adjust based on the lamp icon's size
    }

    // Initialize by showing the first pair of pages
    showPagePair(currentPairIndex);
};
