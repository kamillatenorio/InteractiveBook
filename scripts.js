window.onload = function() {
    // Select all page pairs and single pages in their order of appearance
    const allPages = document.querySelectorAll('.page-pair, .page-single');
    let currentPageIndex = 0; // Start at the first page

    // Function to show the current page (either pair or single)
    function showPage(index) {
        // Hide all pages initially
        allPages.forEach((page, i) => {
            page.style.display = i === index ? 'flex' : 'none';
        });

        // Update the progress bar
        updateProgressBar(index, allPages.length);

        // Control the visibility of 'Previous' and 'Next' buttons
        document.getElementById('prev-btn').style.display = index === 0 ? 'none' : 'inline-block';
        document.getElementById('next-btn').style.display = index === allPages.length - 1 ? 'none' : 'inline-block';
    }

    // Function to navigate to the previous page
    window.prevPage = function() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    }

    // Function to navigate to the next page
    window.nextPage = function() {
        if (currentPageIndex < allPages.length - 1) {
            currentPageIndex++;
            showPage(currentPageIndex);
        }
    }

    // Function to update the progress bar
    function updateProgressBar(currentIndex, totalPages) {
        const progressFill = document.getElementById('progress-fill');
        const progressPercentage = ((currentIndex + 1) / totalPages) * 100;
        progressFill.style.width = progressPercentage + '%';

        const lampIcon = document.getElementById('lamp-icon');
        lampIcon.style.left = `calc(${progressPercentage}% - 15px)`; // Adjust based on lamp size
    }

    // Initialize by showing the first page (either pair or single)
    showPage(currentPageIndex);
};
